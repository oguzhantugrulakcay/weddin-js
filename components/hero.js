import Image from 'next/image';
import { shimmer, toBase64 } from '@/components/imagePlaceholder';
import { formatDateTimeTR } from '@/lib/dateUtils';

export default function Hero({ bride, groom, events = [], backgroundImage }) {

  return (
    <div className="hero">
      <div className="hero-background" style={{ position: 'absolute', inset: 0 }}>
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1200, 800))}`}
        />
      </div>
      <div className="hero-texts font-ballet">
        <h1 className="hero-title">{`${bride.name}`}<br /> & <br />{`${groom.name}`}</h1>
        <div className="hero-event-list">
          {events.map((event) => (
            <div className="hero-event-item" key={event.key}>
              <p className="hero-subtitle">{event.subtitle}</p>
              <p className="hero-date">{formatDateTimeTR(event.date)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
