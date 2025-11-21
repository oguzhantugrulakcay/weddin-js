import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fullname, userCount } = await req.json();
    const now = new Date();
    let event;
    if (now < new Date('2026-01-03')) event = 'Nişan Töreni';
    else if (now < new Date('2026-07-15')) event = 'Kına Gecesi';
    else event = 'Düğün Töreni';

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // 465 kullanıyorsan secure:true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Bağlantı doğrulama
    await transporter.verify().catch(e => {
      console.error('SMTP verify hata:', e);
      throw new Error('SMTP doğrulama başarısız');
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `${event} RSVP - ${fullname}`,
      html: `
        <p><strong>Katılımcı:</strong> ${fullname}</p>
        <p><strong>Kişi Sayısı:</strong> ${userCount}</p>
        <p><strong>Etkinlik:</strong> ${event}</p>
        <p><strong>Tarih:</strong> ${now.toLocaleString('tr-TR')}</p>
      `
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('RSVP email hata:', err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}