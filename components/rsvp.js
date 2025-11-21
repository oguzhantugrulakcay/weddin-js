'use client';
import { useState } from 'react';
import swal from 'sweetalert';

export default function RSVP() {
    const [status, setStatus] = useState(null); // null, 'loading', 'success', 'error'

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('loading');
        const form = e.target;

        const data = {
            fullname: form.fullname.value,
            userCount: Number(form.userCount.value)
        };

        if (data.fullname.trim() === "") {
            swal("Bilgiler Eksik veya Hatalı!", "Lütfen adınızı soyadınızı doğru bir şekilde giriniz.", "warning");
            setStatus(null); // Butonu tekrar aktif et
            return;
        }
        if (data.userCount <= 0) {
            swal("Geçersiz Kişi Sayısı!", "Lütfen geçerli bir kişi sayısı giriniz.", "warning");
            setStatus(null); // Butonu tekrar aktif et
            return;
        }

        try {
            const res = await fetch('/api/rsvp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                swal("Bir Şeyler Yanlış Gitti!", "Bilgileriniz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz", "error");
                setStatus(null); // Hata sonrası tekrar denemeye izin ver
                return;
            }

            const resJson = await res.json();

            if (resJson.success) {
                swal("Teşekkürler!", "Bilgileriniz başarıyla gönderildi.", "success");
                setStatus('success'); // Başarılı durumunu ayarla
                form.reset();
            } else {
                swal("Upss!!!", "Bir şeyler yanlış gitti. Bilgileriniz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz", "error");
                setStatus(null); // Hata sonrası tekrar denemeye izin ver
            }
        } catch (err) {
            swal("Ağ Hatası!", "Sunucuya bağlanırken bir sorun oluştu. Lütfen internet bağlantınızı kontrol edin.", "error");
            setStatus(null); // Hata sonrası tekrar denemeye izin ver
        }
    }

    // Buton metnini duruma göre belirle
    const getButtonText = () => {
        if (status === 'loading') return 'Gönderiliyor...';
        if (status === 'success') return 'Gönderildi';
        return 'Gönder';
    };

    return (
        <div className="container rsvp">
            <h2>Geliyorsunuz değil mi?</h2>
            <form className="rsvp-form text-start" onSubmit={handleSubmit}>
                <div className="row g-3 align-items-end">
                    <div className="col-sm-12 col-md">
                        <label htmlFor="fullname" className="form-label">Adınız Soyadınız:</label>
                        <input type="text" id="fullname" name="fullname" className="form-control" required />
                    </div>
                    <div className="col-sm-12 col-md">
                        <label htmlFor="userCount" className="form-label">Kişi Katılıyorsunuz:</label>
                        <input type="number" id="userCount" name="userCount" className="form-control" required min="1" />
                    </div>
                    <div className="col-sm-12 col-md d-grid">
                        <button
                            type="submit"
                            className="btn btn-outline-thematic w-100"
                            disabled={status === 'loading' || status === 'success'} // Butonu pasif et
                        >
                            {getButtonText()}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}