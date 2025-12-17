'use client';

import { useState } from 'react';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/components/imagePlaceholder';

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

export function Gallery({ galleryName, images }) {
    const [index, setIndex] = useState(-1);
    const slides = images.map(src => ({ src: `/${src}` }));

    return (
        <div className="gallery container my-5">
            <h2 className="text-center mb-4">{galleryName}</h2>
            <div className="row">
                {images.map((image, i) => (
                    <div key={i} className="col-sm-6 col-md-4 mb-4">
                        <div className="gallery-item" onClick={() => setIndex(i)} style={{ cursor: 'pointer' }}>
                            <Image
                                src={`/${image}`}
                                alt={`Gallery Image ${i + 1}`}
                                width={400}
                                height={300}
                                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                                className="img-fluid rounded"
                                sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 300))}`}
                                priority={i < 3}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
                // Eklentiyi plugins dizisine eklemek yeterlidir.
                plugins={[Zoom]}
                // Render prop'una artık gerek yok.
            />
        </div>
    );
}

