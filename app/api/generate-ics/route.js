import { NextResponse } from 'next/server';

export async function GET(request) {
    const date = Date.now();
    var event = {
        title: 'Hande & Oğuzhantuğrul Nişan Töreni',
        start: '20260103T190000Z',
        end: '20260103T230000Z',
        description: 'Büyük günümüzde yanımızda olmanız dileğiyle.',
        location: "Teras Dragos Bi'an Event Salonu - Kartal/İstanbul",
    };
    if (date > new Date("2026-01-03") && date < new Date("2026-07-15")) {
        event = {
            title: 'Hande Kına Gecesi',
            start: '20260715T190000Z',
            end: '20260715T230000Z',
            description: 'Eğlenceli günümde yanımda olman dileğiyle.',
            location: "Teras Dragos Bi'an Event Salonu - Kartal/İstanbul",
        };
    } else if (date > new Date("2026-07-15")) {
        event = {
            title: 'Hande & Oğuzhantuğrul Düğün Töreni',
            start: '20260719T190000Z',
            end: '20260719T230000Z',
            description: 'Büyük günümüzde yanımızda olmanız dileğiyle.',
            location: "Suare Event VIP Salonu - Tuzla/İstanbul",
        };
    }

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Next.js Etkinlik Jeneratörü//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${Date.now()}@sizin-domaininiz.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    // 3. Yanıtı (Response) oluşturun
    return new Response(icsContent, {
        status: 200,
        headers: {
            'Content-Type': 'text/calendar',
            'Content-Disposition': 'attachment; filename="dugun-etkinligi.ics"',
        },
    });
}