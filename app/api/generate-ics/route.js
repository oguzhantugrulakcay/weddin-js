import { NextResponse } from 'next/server';
import siteConfig from '@/site.config.js'; // Yapılandırma dosyasını import et

export async function GET(request) {
    const date = Date.now();
    let eventDetails;

    // .ics metin alanlarındaki özel karakterleri temizler
    const escapeICStext = (text) => {
        if (!text) return '';
        return text.replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n');
    };

    // Tarih formatını ICS standardına uygun hale getirir (YYYYMMDDTHHMMSS)
    const formatToICSDate = (dateString) => {
        if (!dateString) return '';
        const d = new Date(dateString);
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
        const start = new Date(startDateStr);
        const end = new Date(start.getTime() + 4 * 60 * 60 * 1000); // 4 saat ekle
        return {
            start: formatToICSDate(start),
            end: formatToICSDate(end),
        };
    };

    if (date <= new Date(siteConfig.events.soz.date)) {
        const times = getEventTimes(siteConfig.events.soz.date);
        eventDetails = {
            title: `${siteConfig.bride.name} & ${siteConfig.groom.name} Nişan Töreni`,
            start: times.start,
            end: times.end,
            description: `Büyük günümüzde yanımızda olmanız dileğiyle. Konum için tıklayın: ${siteConfig.events.soz.locationUrl}`,
            location: siteConfig.events.soz.venue,
            locationUrl: siteConfig.events.soz.locationUrl,
        };
    } else if (date <= new Date(siteConfig.events.kina.date)) {
        const times = getEventTimes(siteConfig.events.kina.date);
        eventDetails = {
            title: `${siteConfig.bride.name} Kına Gecesi`,
            start: times.start,
            end: times.end,
            description: `Eğlenceli günümde yanımda olman dileğiyle. Konum için tıklayın: ${siteConfig.events.kina.locationUrl}`,
            location: siteConfig.events.kina.venue,
            locationUrl: siteConfig.events.kina.locationUrl,
        };
    } else {
        const times = getEventTimes(siteConfig.events.wedding.date);
        eventDetails = {
            title: `${siteConfig.bride.name} & ${siteConfig.groom.name} Düğün Töreni`,
            start: times.start,
            end: times.end,
            description: `Büyük günümüzde yanımızda olmanız dileğiyle. Konum için tıklayın: ${siteConfig.events.wedding.locationUrl}`,
            location: siteConfig.events.wedding.venue,
            locationUrl: siteConfig.events.wedding.locationUrl,
        };
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