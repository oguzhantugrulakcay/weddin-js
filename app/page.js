import Cupples from "@/components/cupple";
import ImageSlider from "@/components/imageSlider";
import ClientTimer from "@/components/ClientTimer";
import siteConfig from "@/site.config.js";
import { formatDateTimeTR } from "@/lib/dateUtils";
import { getHomepageEvents } from "@/lib/eventUtils";

const homeSliderImages = [
  "images/galery/asansor.JPG",
  "images/galery/besiktas.JPG",
  "images/galery/camlica.JPG",
  "images/galery/dugun.JPG",
  "images/galery/eniste_dogum_gunu_1.JPG",
  "images/galery/kahvalti.JPG",
  "images/galery/konser.JPG",
  "images/galery/ltb.JPG",
  "images/galery/taksim.JPG",
  "images/galery/teklif.JPG",
  "images/galery/tekne.JPG",
  "images/galery/tuzla.JPG",
  "images/galery/yilbasi.JPG",
];

export default function Home() {
  const eventsToShow = getHomepageEvents(siteConfig, new Date());

  return (
    <div>
      <Cupples
        ladyName={`${siteConfig.bride.name} ${siteConfig.bride.surname}`}
        gentlemanName={`${siteConfig.groom.name} ${siteConfig.groom.surname}`}
        ladyPhotoName={siteConfig.bride.photo}
        gentlemanPhotoName={siteConfig.groom.photo}
        iconName={siteConfig.coupleSection.iconName}
        messageTitle={siteConfig.coupleSection.messageTitle}
        messageSubtitle={siteConfig.coupleSection.messageSubtitle}
      />
      <div className="event-stack">
        {eventsToShow.map((event) => (
          <section className="container event-panel" key={event.key}>
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-date">{formatDateTimeTR(event.date)}</p>
              <p className="event-venue">{event.venue}</p>
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
              <a href={`/api/generate-ics?event=${event.key}`} target="_blank" rel="noopener noreferrer" className="btn btn-thematic mt-4 mb-4">Takvime Ekle</a>
            </div>
          </div>
          </section>
        ))}
      </div>
      <ImageSlider images={homeSliderImages} />
      <div className="d-felex justify-content-center align-items-center">

      </div>
    </div >
  );
}
