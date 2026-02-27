import { NextResponse } from 'next/server';
import siteConfig from '@/site.config.js';
import { parseSiteDate } from '@/lib/dateUtils';
import { getDefaultEventType, getEventByType } from '@/lib/eventUtils';

export async function GET(request) {
    const date = new Date();
    const eventType = new URL(request.url).searchParams.get('event');
    let eventDetails;

    // .ics metin alanlarındaki özel karakterleri temizler
    const escapeICStext = (text) => {
        if (!text) return '';
        return text.replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n');
    };

    // Tarih formatını ICS standardına uygun hale getirir (YYYYMMDDTHHMMSS)
    const formatToICSDate = (dateString) => {
        if (!dateString) return '';
        const d = parseSiteDate(dateString);
        // YYYYMMDDTHHMMSS formatı
        return d.getFullYear() +
            ('0' + (d.getMonth() + 1)).slice(-2) +
            ('0' + d.getDate()).slice(-2) +
            'T' +
            ('0' + d.getHours()).slice(-2) +
            ('0' + d.getMinutes()).slice(-2) +
            ('0' + d.getSeconds()).slice(-2);
    };

    // Başlangıç ve bitiş saatlerini hesaplar
    const getEventTimes = (startDateStr) => {
        const start = parseSiteDate(startDateStr);
        const end = new Date(start.getTime() + 4 * 60 * 60 * 1000); // 4 saat ekle
        return {
            start: formatToICSDate(start),
            end: formatToICSDate(end),
        };
    };

    const buildEvent = (event, title, description) => {
        const times = getEventTimes(event.date);
        return {
            title,
            start: times.start,
            end: times.end,
            description,
            location: event.venue,
            locationUrl: event.locationUrl,
        };
    };

    const buildKinaEvent = () => {
        return buildEvent(
            siteConfig.events.kina,
            `${siteConfig.bride.name} Kına Gecesi`,
            `Eğlenceli günümde yanımda olman dileğiyle. Konum için tıklayın: ${siteConfig.events.kina.locationUrl}`
        );
    };

    const buildSozEvent = () => {
        return buildEvent(
            siteConfig.events.soz,
            `${siteConfig.bride.name} & ${siteConfig.groom.name} Nişan Töreni`,
            `Büyük günümüzde yanımızda olmanız dileğiyle. Konum için tıklayın: ${siteConfig.events.soz.locationUrl}`
        );
    };

    const buildWeddingEvent = () => {
        return buildEvent(
            siteConfig.events.wedding,
            `${siteConfig.bride.name} & ${siteConfig.groom.name} Düğün Töreni`,
            `Büyük günümüzde yanımızda olmanız dileğiyle. Konum için tıklayın: ${siteConfig.events.wedding.locationUrl}`
        );
    };

    const resolvedType = getEventByType(siteConfig, eventType) ? eventType : getDefaultEventType(siteConfig, date);

    if (resolvedType === 'soz') {
      eventDetails = buildSozEvent();
    } else if (resolvedType === 'kina') {
      eventDetails = buildKinaEvent();
    } else {
      eventDetails = buildWeddingEvent();
    }

    const slugify = (text) => {
        const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
        const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
        const p = new RegExp(a.split('').join('|'), 'g')

        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(p, c => b.charAt(a.indexOf(c)))
            .replace(/&/g, '-and-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '')
    }

    const safeFilename = slugify(eventDetails.title);
    
    // .ics içeriğini \r\n satır sonları ile oluştur
    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Next.js Event Generator//EN',
        'BEGIN:VEVENT',
        `UID:${Date.now()}@weddin-js`,
        `DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '').substring(0, 15)}Z`,
        `DTSTART;TZID=Europe/Istanbul:${eventDetails.start}`,
        `DTEND;TZID=Europe/Istanbul:${eventDetails.end}`,
        `SUMMARY:${escapeICStext(eventDetails.title)}`,
        `DESCRIPTION:${escapeICStext(eventDetails.description)}`,
        `LOCATION:${escapeICStext(eventDetails.location)}`,
        // Apple için yapılandırılmış konum (isteğe bağlı ama faydalı)
        `X-APPLE-STRUCTURED-LOCATION;VALUE=URI;X-TITLE=${escapeICStext(eventDetails.location)}:geo:;X-APPLE-MAPS-URL=${eventDetails.locationUrl}`,
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n'); // Satırları CRLF ile birleştir

    const contentLength = new TextEncoder().encode(icsContent).length;

    return new Response(icsContent, {
        status: 200,
        headers: {
            'Content-Type': 'text/calendar; charset=utf-8',
            'Content-Disposition': `attachment; filename="${safeFilename}.ics"`,
            'Content-Length': contentLength.toString(),
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
        },
    });
}
