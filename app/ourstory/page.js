import  TimeLine  from "@/components/timeLine";

export default function HomePage() {
  const timelineEvents = [
    { 
      id: 1, 
      title: "Nişan Töreni", 
      description: "03 Ocak 2026, Cumartesi - Saat 19:00", 
      location: "Teras Dragos, Kartal/İstanbul",
      date: new Date("2026-01-03T19:00:00"),
      image: "images/bride.jpg"
    },
    { 
      id: 2, 
      title: "Düğün Töreni", 
      description: "19 Temmuz 2026, Pazar - Saat 19:00", 
      location: "Suare Garden VIP Salonu, Tuzla/İstanbul",
      date: new Date("2026-07-19T19:00:00"),
      image: "images/bride.jpg"
    },
    { 
      id: 3, 
      title: "Kına Gecesi", 
      description: "15 Temmuz 2026, Cuma - Saat 20:00", 
      location: "The Marmara Taksim, İstanbul",
      date: new Date("2026-07-15T20:00:00"),
      image: "images/bride.jpg"
    },{
      id: 4,
      title:"Tanıştık",
      description:"Kartal Atalar Sürücü Kursunda eğitmen ve öğrenci olarak tanıştık.",
      location:"Kartal/İstanbul",
      date: new Date("2024-06-15T10:00:00"),
      image:"images/cover_bg_1.jpg"
    }
    ,{
      id: 5,
      title:"Sevgili olduk",
      description:"Ben flört sevmiyorum!!!.",
      location:"Kartal/İstanbul",
      date: new Date("2024-09-28T10:00:00"),
      image:"images/cover_bg_1.jpg"
    }
  ];
  return (
    <TimeLine items={timelineEvents} />
  );
}