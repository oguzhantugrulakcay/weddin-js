import { NextResponse } from 'next/server';
import { getGalleryCategories } from '@/lib/galleryData';

export async function GET() {
  const categories = await getGalleryCategories();

  return NextResponse.json({ categories });
}
