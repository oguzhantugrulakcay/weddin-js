import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const imagesDirectory = path.join(process.cwd(), 'public/gallery');
  
  try {
    const fileNames = fs.readdirSync(imagesDirectory);
    
    // Sadece resim dosyalarını filtreleyin (jpg, png, webp vb.)
    const images = fileNames.filter(file => 
      /\.(jpe?g|png|gif|webp|svg)$/i.test(file)
    ).map(file => `/gallery/${file}`);

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: "Klasör bulunamadı" }, { status: 500 });
  }
}