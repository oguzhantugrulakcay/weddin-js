'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/components/imagePlaceholder';

export default function ImageSlider({ images }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    import('bootstrap/js/dist/carousel')
      .then(({ default: Carousel }) => {
        new Carousel(el, { interval: 4000, ride: 'carousel', pause: false, touch: true, wrap: true });
      })
      .catch(() => {});
  }, []);

  return (
    <div className="image-slider container mt-4 mb-4">
      <div id="weddingCarousel"
           ref={carouselRef}
           className="carousel slide"
           data-bs-ride="carousel"
           data-bs-interval="4000">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={image} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div style={{ position: 'relative', height: '500px', width: '100%' }}>
                <Image
                  src={`/${image}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 500))}`}
                  style={{ objectFit: 'cover' }}
                  className="d-block w-100 rounded"
                  onLoadingComplete={(img) => { img.style.opacity = '1'; }}
                  onError={(e) => { e.currentTarget.style.background = '#eee'; }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}