import Image from 'next/image';
import { shimmer, toBase64 } from '@/components/imagePlaceholder';

export default function Hero({ bride, groom, subtitle, date, backgroundImage }) {
  const d = new Date(date);
  const formattedDate = `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
  const formattedTime = `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;

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
        <p className="hero-subtitle">{subtitle}</p>
        <p className="hero-date">{formattedDate} {formattedTime}</p>
      </div>
    </div>
  );
}