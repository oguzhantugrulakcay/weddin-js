'use client'; // Bileşeni Client Component olarak işaretliyoruz

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/components/imagePlaceholder';

export default function ImageSlider({ images }) {
    const carouselRef = useRef(null);

    useEffect(() => {
        // useEffect sadece client'ta çalıştığı için, import'u buraya taşıyoruz.
        if (carouselRef.current) {
            // Bootstrap'in Carousel modülünü dinamik olarak import ediyoruz.
            import('bootstrap/js/dist/carousel').then(({ default: Carousel }) => {
                const carouselInstance = new Carousel(carouselRef.current, {
                    interval: 5000,
                    ride: 'carousel'
                });
            });
        }
    }, []); // Boş dependency array, bu effect'in sadece bileşen yüklendiğinde bir kez çalışmasını sağlar

    return (
        <div className="image-slider container mt-4 mb-4">
            <div id="weddingCarousel" ref={carouselRef} className="carousel slide">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div style={{ position: 'relative', height: '500px', width: '100%' }}>
                                <Image
                                    src={`/${image}`}
                                    alt={`Slide ${index}`}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="d-block w-100 rounded"
                                    priority={index === 0}
                                    loading={index === 0 ? 'eager' : undefined}
                                    sizes="(max-width: 768px) 100vw, 900px"
                                    placeholder="blur"
                                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 500))}`}
                                    onLoadingComplete={(img) => { img.style.opacity = '1'; }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}