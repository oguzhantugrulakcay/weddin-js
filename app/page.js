import Cupples from "@/components/cupple";
import ImageSlider from "@/components/imageSlider";
import ClientTimer from "@/components/ClientTimer";
import siteConfig from "@/site.config.js";
import { formatDateTimeTR } from "@/lib/dateUtils";
import { getContentStage, getHomepageEvents } from "@/lib/eventUtils";
import { getFeaturedGalleryImages } from "@/lib/galleryData";

export default async function Home() {
  const now = new Date();
  const eventsToShow = getHomepageEvents(siteConfig, now);
  const contentStage = getContentStage(siteConfig, now);
  const homeSliderImages = await getFeaturedGalleryImages(contentStage);

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
              <h3 className="event-content-title">{event.contentTitle}</h3>
              <p className="event-content-description">{event.contentDescription}</p>
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
