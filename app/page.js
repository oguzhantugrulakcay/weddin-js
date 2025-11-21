import Cupples from "@/components/cupple";
import ImageSlider from "@/components/imageSlider";
import ClientTimer from "@/components/ClientTimer";
import { TimeLine } from "@/components/timeLine";
import { Gallery } from "@/components/gallery";

export default function Home() {
  const timelineEvents = [
    { 
      id: 1, 
      title: "Düğün Töreni", 
      description: "03 Ocak 2026, Cumartesi - Saat 19:00", 
      location: "The Marmara Taksim, İstanbul",
      date: new Date("2026-01-03T19:00:00"),
      image: "images/bride.jpg"
    },
    { 
      id: 2, 
      title: "Nikah Töreni", 
      description: "03 Ocak 2026, Cumartesi - Saat 17:00", 
      location: "The Marmara Taksim, İstanbul",
      date: new Date("2026-01-03T17:00:00"),
      image: "images/bride.jpg"
    },
    { 
      id: 3, 
      title: "Kına Gecesi", 
      description: "02 Ocak 2026, Cuma - Saat 20:00", 
      location: "The Marmara Taksim, İstanbul",
      date: new Date("2026-01-02T20:00:00"),
      image: "images/bride.jpg"
    }
  ];

  return (
    <div>
      <TimeLine items={timelineEvents} />
      
      <Cupples ladyName={"Hande Gözütok"} gentlemanName={"Oğuzhantuğrul Akçay"} ladyPhotoName={"images/bride.jpg"} gentlemanPhotoName={"images/groom.jpg"} iconName={"favorite_border"} messageTitle={"Bir Ömür Boyu Mutluluk"} messageSubtitle={"Sizleri Aramızda Görmek İsteriz"} />

      <ImageSlider images={["images/bride.jpg", "images/cover_bg_1.jpg"]} />
      <div className="d-felex justify-content-center align-items-center">
        <h1>Sizleri Aramızda Göremek İsteriz</h1>
      </div>
      <Gallery galleryName="Düğün Fotoğraf Galerisi" images={["images/bride.jpg", "images/cover_bg_1.jpg", "images/groom.jpg", "images/cover_bg_2.jpg"]} />
      <ClientTimer targetDate="2026-01-03" />
    </div>
  );
}
