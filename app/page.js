import Cupples from "@/components/cupple";
import ImageSlider from "@/components/imageSlider";
import ClientTimer from "@/components/ClientTimer";
import { TimeLine } from "@/components/timeLine";
import { Gallery } from "@/components/gallery";

export default function Home() {
  

  return (
    <div>
      <Cupples ladyName={"Hande Gözütok"} gentlemanName={"Oğuzhantuğrul Akçay"} ladyPhotoName={"images/bride.jpg"} gentlemanPhotoName={"images/groom.jpg"} iconName={"favorite_border"} messageTitle={"Bir Ömür Boyu Mutluluk"} messageSubtitle={"Sizleri Aramızda Görmek İsteriz"} />
      <ClientTimer targetDate="2026-01-03" />
      <ImageSlider images={["images/bride.jpg", "images/cover_bg_1.jpg"]} />
      <div className="d-felex justify-content-center align-items-center">
        
      </div>
    </div>
  );
}
