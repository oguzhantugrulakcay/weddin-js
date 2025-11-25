import  TimeLine  from "@/components/timeLine";

export default function HomePage() {
  const timelineEvents = [
    { 
      id: 1, 
      title: "Nişan Töreni", 
      description: "Şimdi sıra nişanımızda! Sizleri de aramızda görmekten mutluluk duyarız.", 
      location: "Teras Dragos, Kartal/İstanbul",
      date: new Date("2026-01-03T19:00:00"),
      image: "images/bian_event.jpg"
    }
    // { 
    //   id: 2, 
    //   title: "Düğün Töreni", 
    //   description: "19 Temmuz 2026, Pazar - Saat 19:00", 
    //   location: "Suare Garden VIP Salonu, Tuzla/İstanbul",
    //   date: new Date("2026-07-19T19:00:00"),
    //   image: "images/bride.jpg"
    // },
    // { 
    //   id: 3, 
    //   title: "Kına Gecesi", 
    //   description: "15 Temmuz 2026, Cuma - Saat 20:00", 
    //   location: "The Marmara Taksim, İstanbul",
    //   date: new Date("2026-07-15T20:00:00"),
    //   image: "images/bride.jpg"
    // }
    ,
    {
      id: 4,
      title:"Tanıştık",
      description:"Kartal Atalar Sürücü Kursunda eğitmen ve öğrenci olarak tanıştık.",
      location:"Kartal/İstanbul",
      date: new Date("2024-08-03T10:00:00"),
      image:"images/motor_1.JPG"
    },{
      id: 5,
      title:"Sevgili Olduk",
      description:"Birlikte geçirdiğimiz güzel anların bizim için artık bir anlamı vardı.",
      location:"Kartal/İstanbul",
      date: new Date("2024-09-29T10:00:00"),
      image:"images/sahil.JPG"
    },{
      id: 6,
      title:"İlk Kahvaltımız",
      description:"Beykoz'da birlikte yaptığımız lezzetli kahvaltı.",
      location:"Beykoz/İstanbul",
      date: new Date("2024-10-10T19:00:00"),
      image:"images/kahvalti.JPG"
    },{
      id: 7,
      title:"İlk Konserimiz",
      description:"Harbiye'de hem heyecanlıydık hem coşkulu.",
      location:"Harbiye/İstanbul",
      date: new Date("2024-10-08T20:00:00"),
      image:"images/harbiye.JPG"
    },{
      id: 8,
      title:"İlk Adım",
      description:"Ve evlilik teklifimiz...",
      location:"Beşiktaş/İstanbul",
      date: new Date("2025-09-29T15:00:00"),
      image:"images/tektas.JPG"
    },{
      id:9,
      title:"İlk Davetimiz",
      description:"Ezgi ve Mert çiftine sevgiler ;)",
      location:"Ataşehir/İstanbul",
      date: new Date("2024-12-22T18:00:00"),
      image:"images/dugun.JPG"
    },{
      id:10,
      title:"Yeni Yıl Yeni Mutluluklar",
      description:"Sevdiklerimiz ile birlikte yeni yılı karşıladık.",
      location:"Kadiköy/İstanbul",
      date: new Date("2024-12-31T23:59:00"),
      image:"images/yilbasi_toplu.JPG"
    },{
      id:11,
      title:"Bol bol gezdik...",
      description:"Birlikte birçok yere gittik ve güzel anılar biriktirdik.",
      note:"Not: Aras çabuk büyü daha gezeceğimiz yerler var. ;)",
      location:"Çeşitli Lokasyonlar",
      date: new Date("2025-03-01T00:00:00"),
      image:"images/hababam.JPG"
    },
    {
      id:12,
      title:"Sınava hazırlandık!",
      description:"Dikkat aramızda Stj. Mali Müşavir var :)",
      location:"Göztepe/İstanbul",
      date: new Date("2025-05-17T00:00:00"),
      image:"images/sinav.JPG"
    },
    {
      id:13,
      title:"Bizim Ekip",
      description:"En güzel anılarımızı birlikte paylaştığımız canlarımız. ",
      note:"Hande <3 Yasin, Burcu <3 Anıl ve Arven",
      location:"İstanbul",
      date: new Date("2025-09-18T00:00:00"),
      image:"images/ekip.JPG"
    },
    {
      id:14,
      title:"İlk Aile Tanışması",
      description:"Anneler gününde ailelerimizi bir araya getirdik.",
      location:"Kadiköy/İstanbul",
      date: new Date("2025-05-10T00:00:00"),
      image:"images/anneler.JPG"
    }
  ];
  return (
    <TimeLine items={timelineEvents} />
  );
}