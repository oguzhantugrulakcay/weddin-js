import path from 'path';
import { promises as fs } from 'fs';
import { Gallery } from '@/components/gallery';

const IMAGE_EXTENSIONS = new Set([
  '.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif',
  '.JPG', '.JPEG', '.PNG', '.WEBP', '.GIF', '.AVIF'
]);

async function listImagesIn(dirRel) {
  const absDir = path.join(process.cwd(), 'public', dirRel);
  const entries = await fs.readdir(absDir, { withFileTypes: true });

  return entries
    .filter((e) => e.isFile() && IMAGE_EXTENSIONS.has(path.extname(e.name)))
    // return paths relative to /public, without leading slash
    .map((e) => `${dirRel.replace(/^[\\/]/, '').replace(/\\/g, '/')}/${e.name}`);
}

export default async function GalleryPage() {
  // Reads from public/images/galery
  const images = await listImagesIn(path.join('images', 'galery'));

  return (
    <div className="container">
      <h1>Bizim Fotoğraflarımız</h1>
      <Gallery galleryName="" images={images} />
    </div>
  );
}