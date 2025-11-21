import Cupples from "@/components/cupple";
import ImageSlider from "@/components/imageSlider";
import ClientTimer from "@/components/ClientTimer";
import { TimeLine } from "@/components/timeLine";
import { Gallery } from "@/components/gallery";

export default function Home() {
  const today=Date.now();
  var event=null;
  if(today<new Date("2026-01-03")){
    event={
      title:"Nişanımıza bekliyoruz",
      date:"2026-01-03 19:00",
    }
  } else if(today<new Date("2026-07-15")){
    event={
      title:"Kınaya bekliyoruz",
      date:"2026-07-15 19:00",
    }
  }else{
    event={
      title:"Düğünümüze bekliyoruz",
      date:"2026-07-19 19:00",
    }
  }
  

  return (
    <div>
      <Cupples ladyName={"Hande Gözütok"} gentlemanName={"Oğuzhantuğrul Akçay"} ladyPhotoName={"images/hande-2.jpg"} gentlemanPhotoName={"images/ozi-1.jpg"} iconName={"favorite_border"} messageTitle={"Bir Ömür Boyu Mutluluk"} messageSubtitle={"Sizleri Aramızda Görmek İsteriz"} />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2>{event.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ClientTimer targetDate={event.date} />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-2 d-grid">
            <a href="#" className="btn btn-thematic mt-4 mb-4">Konum</a>
          </div>
          <div className="col-sm-2 d-grid">
            <a href="/api/generate-ics" className="btn btn-thematic mt-4 mb-4">Takvime Ekle</a>
          </div>
        </div>
      </div>
      <ImageSlider images={["images/hande-2.jpg", "images/cover_bg_1.jpg"]} />
      <div className="d-felex justify-content-center align-items-center">

      </div>
    </div >
  );
}
