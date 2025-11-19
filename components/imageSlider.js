'use client'; // Bileşeni Client Component olarak işaretliyoruz

import { useEffect, useRef } from 'react';
import Image from 'next/image';
// Bu satırı kaldırıyoruz, çünkü sunucuda hataya neden oluyor.
// import { Carousel } from 'bootstrap';

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
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}