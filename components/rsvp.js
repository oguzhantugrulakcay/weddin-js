'use client';
import { useState } from 'react';
import swal from 'sweetalert';

export default function RSVP() {
    const [status, setStatus] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('loading');
        const form = e.target;

        const data = {
            fullname: form.fullname.value,
            userCount: Number(form.userCount.value)
        };

        if(data.fullname.trim() === ""){
            swal("Bilgiler Eksik veya Hatalı!", "Lütfen adınızı soyadınızı doğru bir şekilde giriniz.", "warning");
            setStatus(null);
            return;
        }
        if(data.userCount < 0){
            swal("Geçersiz Kişi Sayısı!", "Lütfen geçerli bir kişi sayısı giriniz.", "warning");
            setStatus(null);
            return;
        }
        if(data.userCount==0){
            swal("Geçersiz Kişi Sayısı!", "Katılım sağlayacaksanız lütfen geçerli bir kişi sayısı giriniz.", "warning");
            setStatus(null);
            return;
        }
        try {
            const res = await fetch('/api/rsvp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!res.ok) {
                swal("Bİr Şeyler Yanlış Gitti!", "Bilgileriniz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz", "error");
                return;
            }
            var resJson = await res.json();
            if (!resJson.success) {
                swal("Bİr Şeyler Yanlış Gitti!", "Bilgileriniz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz", "error");
            }
            if (resJson.success) {
                swal("Teşekkürler!", "Bilgileriniz başarıyla gönderildi.", "success");
            } else {
                swal("Upss!!!", "Bir şeyler yanlış gitti. Bilgileriniz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz", "error");
            }
            form.reset();
        } catch (err) {
            setStatus('error');
        }
    }

    return (
        <div className="container rsvp">
            <h2>Geliyorsunuz değil mi?</h2>
            <form className="rsvp-form text-start" onSubmit={handleSubmit}>
                <div className="row g-3 align-items-end">
                    <div className="col">
                        <label htmlFor="fullname" className="form-label">Adınız Soyadınız:</label>
                        <input type="text" id="fullname" name="fullname" className="form-control" required />
                    </div>
                    <div className="col">
                        <label htmlFor="userCount" className="form-label">Kişi Katılıyorsunuz:</label>
                        <input type="number" id="userCount" name="userCount" className="form-control" required />
                    </div>
                    <div className="col d-grid">
                        <button type="submit" className="btn btn-outline-thematic w-100">
                            {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}