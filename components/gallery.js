'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/components/imagePlaceholder';
import 'yet-another-react-lightbox/styles.css';

// Lazy-load JS for the lightbox only on client
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false });
const Zoom = dynamic(() => import('yet-another-react-lightbox/plugins/zoom'), { ssr: false });

export function Gallery({ galleryName, images = [], categories = [] }) {
  const normalizedCategories = useMemo(() => {
    if (categories.length > 0) return categories;

    return [
      {
        id: 'all',
        label: galleryName || 'Galeri',
        description: '',
        images,
      },
    ];
  }, [categories, galleryName, images]);

  const [activeCategoryId, setActiveCategoryId] = useState(normalizedCategories[0]?.id ?? 'all');
  const [index, setIndex] = useState(-1);
  const activeCategory = normalizedCategories.find((category) => category.id === activeCategoryId) ?? normalizedCategories[0];
  const activeImages = useMemo(() => activeCategory?.images ?? [], [activeCategory]);
  const slides = useMemo(() => activeImages.map(src => ({ src: `/${src}` })), [activeImages]);

  function handleCategoryChange(categoryId) {
    setActiveCategoryId(categoryId);
    setIndex(-1);
  }

  return (
    <div className="gallery container my-5">
      {galleryName && <h2 className="text-center mb-4">{galleryName}</h2>}

      {normalizedCategories.length > 1 && (
        <div className="gallery-category-tabs" role="tablist" aria-label="Galeri kategorileri">
          {normalizedCategories.map((category) => (
            <button
              type="button"
              key={category.id}
              className={`gallery-category-tab ${category.id === activeCategory.id ? 'is-active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
              role="tab"
              aria-selected={category.id === activeCategory.id}
            >
              <span>{category.label}</span>
              <small>{category.images.length}</small>
            </button>
          ))}
        </div>
      )}

      {activeCategory?.description && (
        <p className="gallery-category-description">{activeCategory.description}</p>
      )}

      <div className="row">
        {activeImages.map((image, i) => (
          <div key={i} className="col-sm-6 col-md-4 mb-4">
            <div className="gallery-item" onClick={() => setIndex(i)} style={{ cursor: 'pointer' }}>
              <Image
                src={`/${image}`}
                alt={`${activeCategory.label} fotoğrafı ${i + 1}`}
                width={400}
                height={300}
                sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 300))}`}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                className="img-fluid rounded"
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
        plugins={[Zoom]}
      />
    </div>
  );
}

