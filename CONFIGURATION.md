# Wedding App Configuration / Düğün Uygulaması Yapılandırması

This project is configured from a single file: `site.config.js`.

Bu proje tek bir dosya üzerinden yapılandırılır: `site.config.js`.

---

## 1) Couple Information / Gelin & Damat Bilgileri

### English
Edit the following sections:

- `metadata`: browser title and description
- `bride`: bride's name, surname, and profile photo
- `groom`: groom's name, surname, and profile photo
- `coupleSection`: icon + homepage invitation text

Example:

```js
bride: {
  name: "Hande Şeyma",
  surname: "GÖZÜTOK",
  photo: "images/hande-2.jpg",
},
```

Photo paths must be inside `/public` and referenced **without** `/public` prefix.

### Türkçe
Aşağıdaki bölümleri düzenleyin:

- `metadata`: tarayıcı başlığı ve açıklama
- `bride`: gelin adı, soyadı ve profil fotoğrafı
- `groom`: damat adı, soyadı ve profil fotoğrafı
- `coupleSection`: ikon + anasayfa davet metni

Örnek:

```js
groom: {
  name: "Oğuzhantuğrul",
  surname: "AKÇAY",
  photo: "images/ozi-1.jpg",
},
```

Fotoğraf yolları `/public` altında olmalı ve yol yazılırken `/public` öneki kullanılmamalıdır.

---

## 2) Theme Colors / Tema Renkleri

### English
Use the `theme` object in `site.config.js` to control the UI palette.

Important fields:
- `bgColor`: page background
- `romanticBerry`: primary accent color
- `text`: main text color
- `surfaceColor`, `surfaceAltColor`: card and panel colors
- `timerGradientStart`, `ctaGradientStart`: gradient start colors

The second gradient stop is based on `romanticBerry`.

### Türkçe
Arayüz renk paletini yönetmek için `site.config.js` içindeki `theme` objesini kullanın.

Önemli alanlar:
- `bgColor`: sayfa arka planı
- `romanticBerry`: ana vurgu rengi
- `text`: metin ana rengi
- `surfaceColor`, `surfaceAltColor`: kart/panel renkleri
- `timerGradientStart`, `ctaGradientStart`: gradyan başlangıç renkleri

Gradyanın ikinci rengi `romanticBerry` değerinden alınır.

---

## 3) Event Definitions / Etkinlik Tanımları

### English
Define events under `events` (`soz`, `kina`, `wedding`) with:
- `date` (`YYYY-MM-DD HH:mm`)
- `venue`
- `locationUrl`

### Türkçe
`events` alanı altında (`soz`, `kina`, `wedding`) her etkinlik için:
- `date` (`YYYY-MM-DD HH:mm`)
- `venue`
- `locationUrl`

girin.

---

## 4) Run Locally / Local Çalıştırma

```bash
npm install
npm run dev
```

Open / Açın: `http://localhost:3000`
