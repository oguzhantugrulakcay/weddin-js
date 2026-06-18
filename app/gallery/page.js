import { Gallery } from '@/components/gallery';
import { getGalleryCategories } from '@/lib/galleryData';

export default async function GalleryPage() {
  const categories = await getGalleryCategories();

  return (
    <div className="container">
      <h1>Bizim Fotoğraflarımız</h1>
      <Gallery categories={categories} />
    </div>
  );
}
