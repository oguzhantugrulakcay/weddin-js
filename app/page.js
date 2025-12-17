import Cupples from "@/components/cupple";
import ImageSlider from "@/components/imageSlider";
import ClientTimer from "@/components/ClientTimer";
import siteConfig from '@/site.config.js'; 

export default function Home() {
  const today=Date.now();
  var event=null;
  if(today<new Date("2026-01-03")){
    event={
      title:"Nişanımıza bekliyoruz",
      date:siteConfig.events.soz.date,
      locationUrl:siteConfig.events.soz.locationUrl
    }
  } else if(today<new Date("2026-07-15")){
    event={
      title:"Kınaya bekliyoruz",
      date:siteConfig.events.kina.date,
      locationUrl:siteConfig.events.kina.locationUrl
    }
  }else{
    event={
      title:"Düğünümüze bekliyoruz",
      date:siteConfig.events.wedding.date,
      locationUrl:siteConfig.events.wedding.locationUrl
    }
  }
  

  return (
    <div>
      <Cupples ladyName={`${siteConfig.bride.name} ${siteConfig.bride.surname}`} gentlemanName={`${siteConfig.groom.name} ${siteConfig.groom.surname}`} ladyPhotoName={"images/hande-2.jpg"} gentlemanPhotoName={"images/ozi-1.jpg"} iconName={"favorite_border"} messageTitle={"Bir Ömür Boyu Mutluluk"} messageSubtitle={"Sizleri Aramızda Görmek İsteriz"} />
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
            <a href={`${event.locationUrl}`} target="_blank" rel="noopener noreferrer" className="btn btn-thematic mt-4 mb-4">Konum</a>
          </div>
          <div className="col-sm-2 d-grid">
            <a href="/api/generate-ics" target="_blank" rel="noopener noreferrer"  className="btn btn-thematic mt-4 mb-4">Takvime Ekle</a>
          </div>
        </div>
      </div>
      <ImageSlider images={["images/galery/asansor.JPG",
                        "images/galery/besiktas.JPG",
                        "images/galery/camlica.JPG",
                        "images/galery/dugun.JPG",
                        "images/galery/eniste_dogum_gunu_1.JPG",
                        "images/galery/eniste_dogum_gunu_2.JPG",
                        "images/galery/kahvalti.JPG",
                        "images/galery/konser.JPG",
                        "images/galery/ltb.JPG",
                        "images/galery/taksim.JPG",
                        "images/galery/teklif.JPG",
                        "images/galery/tekne.JPG",
                        "images/galery/tuzla.JPG",
                        "images/galery/yilbasi.JPG"]} />
      <div className="d-felex justify-content-center align-items-center">

      </div>
    </div >
  );
}
