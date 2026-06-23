import  TimeLine  from "@/components/timeLine";

export default function HomePage() {
  const timelineEvents = [
    { 
  id: 1, 
  title: "Nişan Töreni", 
  description: "İki ailenin birleştiği, aşkımızın resmileştirildiği anı. Sevdiklerimizin gözlerinin önünde verilen söz ve yaşanacak güzel günlerin başlangıcı.", 
  location: "Teras Dragos Bi'an Event Salonu, Kartal/İstanbul",
  date: new Date("2026-01-03T19:00:00"),
  image: "images/bian_event.jpg"
},
{ 
  id: 2, 
  title: "Düğün Töreni", 
  description: "Hayal ettiğimiz büyük gün! Aşkımızı tüm dünyaya ilan edeceğimiz, en özel insanlarımız ile yaşayacağımız unutulmaz bir akşam. Buradan başlıyor sonsuza dek devam eden hikayemiz.", 
  location: "Suare Event VIP Salonu, Tuzla/İstanbul",
  date: new Date("2026-07-19T19:00:00"),
  image: "images/galery/nisan/B086B806-6A61-4C93-93E3-F30A091532C6 (1).jpg"
},
{ 
  id: 3, 
  title: "Kına Gecesi", 
  description: "Gelin olmaya hazırlanırken, sevgimiz ve eğlencemiz ile dolu bir gece. Geleneklerimizi yaşadığımız, sevdiklerimiz ile bol bol güldüğümüz, kına yakılarak başlayan yeni dönem.", 
  location: "Aydos Düğün Davet Saklıbahçe, Kartal/İstanbul",
  date: new Date("2026-07-15T20:00:00"),
  image: "images/galery/nisan/0D152271-D027-4974-9C3D-8F50051ED132.jpg"
},
    {
      id: 4,
      title:"Tanıştık",
      description:"Kartal Atalar Sürücü Kursunda eğitmen ve öğrenci olarak tanıştık.",
      location:"Kartal/İstanbul",
      date: new Date("2024-08-03T10:00:00"),
      image:"images/galery/motor_1.JPG"
    },{
      id: 5,
      title:"Sevgili Olduk",
      description:"Birlikte geçirdiğimiz güzel anların bizim için artık bir anlamı vardı.",
      location:"Kartal/İstanbul",
      date: new Date("2024-09-29T10:00:00"),
      image:"images/galery/sahil.JPG"
    },{
      id: 6,
      title:"İlk Kahvaltımız",
      description:"Beykoz'da birlikte yaptığımız lezzetli kahvaltı.",
      location:"Beykoz/İstanbul",
      date: new Date("2024-10-10T19:00:00"),
      image:"images/galery/kahvalti.JPG"
    },{
      id: 7,
      title:"İlk Konserimiz",
      description:"Harbiye'de hem heyecanlıydık hem coşkulu.",
      location:"Harbiye/İstanbul",
      date: new Date("2024-10-08T20:00:00"),
      image:"images/galery/harbiye.JPG"
    },{
      id: 8,
      title:"İlk Adım",
      description:"Ve evlilik teklifimiz...",
      location:"Beşiktaş/İstanbul",
      date: new Date("2025-09-29T15:00:00"),
      image:"images/galery/tektas.JPG"
    },{
      id:9,
      title:"İlk Davetimiz",
      description:"Ezgi ve Mert çiftine sevgiler ;)",
      location:"Ataşehir/İstanbul",
      date: new Date("2024-12-22T18:00:00"),
      image:"images/galery/dugun.JPG"
    },{
      id:10,
      title:"Yeni Yıl Yeni Mutluluklar",
      description:"Sevdiklerimiz ile birlikte yeni yılı karşıladık.",
      location:"Kadiköy/İstanbul",
      date: new Date("2024-12-31T23:59:00"),
      image:"images/galery/yilbasi_toplu.JPG"
    },{
      id:11,
      title:"Bol bol gezdik...",
      description:"Birlikte birçok yere gittik ve güzel anılar biriktirdik.",
      note:"Not: Aras çabuk büyü daha gezeceğimiz yerler var. ;)",
      location:"Çeşitli Lokasyonlar",
      date: new Date("2025-03-01T00:00:00"),
      image:"images/galery/hababam.JPG"
    },
    {
      id:12,
      title:"Sınava hazırlandık!",
      description:"Dikkat aramızda Stj. Mali Müşavir var :)",
      location:"Göztepe/İstanbul",
      date: new Date("2025-05-17T00:00:00"),
      image:"images/galery/sinav.JPG"
    },
    {
      id:13,
      title:"Bizim Ekip",
      description:"En güzel anılarımızı birlikte paylaştığımız canlarımız. ",
      note:"Hande <3 Yasin, Burcu <3 Anıl ve Arven",
      location:"İstanbul",
      date: new Date("2025-09-18T00:00:00"),
      image:"images/galery/ekip.JPG"
    },
    {
      id:14,
      title:"İlk Aile Tanışması",
      description:"Anneler gününde ailelerimizi bir araya getirdik.",
      location:"Kadiköy/İstanbul",
      date: new Date("2025-05-10T00:00:00"),
      image:"images/galery/anneler.JPG"
    }
  ];
  return (
    <TimeLine items={timelineEvents} />
  );
}