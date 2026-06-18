import path from "path";
import { promises as fs } from "fs";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

const featuredGeneralImages = [
  "images/galery/asansor.JPG",
  "images/galery/besiktas.JPG",
  "images/galery/camlica.JPG",
  "images/galery/dugun.JPG",
  "images/galery/eniste_dogum_gunu_1.JPG",
  "images/galery/kahvalti.JPG",
  "images/galery/konser.JPG",
  "images/galery/ltb.JPG",
  "images/galery/taksim.JPG",
  "images/galery/teklif.JPG",
  "images/galery/tekne.JPG",
  "images/galery/tuzla.JPG",
  "images/galery/yilbasi.JPG",
];

async function listImagesIn(dirRel) {
  const absDir = path.join(process.cwd(), "public", dirRel);

  try {
    const entries = await fs.readdir(absDir, { withFileTypes: true });

    return entries
      .filter((entry) => {
        if (!entry.isFile()) return false;
        return IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase());
      })
      .map((entry) => `${dirRel.replace(/^[\\/]/, "").replace(/\\/g, "/")}/${entry.name}`);
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

export async function getGalleryCategories() {
  const [generalImages, engagementImages] = await Promise.all([
    listImagesIn(path.join("images", "galery")),
    listImagesIn(path.join("images", "galery", "nisan")),
  ]);

  return [
    {
      id: "genel",
      label: "Genel",
      description: "Birlikte biriktirdiğimiz anılar",
      images: generalImages,
    },
    {
      id: "nisan",
      label: "Nişan",
      description: "Nişan günümüzden kareler",
      images: engagementImages,
    },
    {
      id: "dugun",
      label: "Düğün",
      description: "Düğün fotoğraflarımızı burada paylaşacağız",
      images: [],
    },
  ];
}

export async function getFeaturedGalleryImages(stage) {
  const categories = await getGalleryCategories();
  const engagementImages = categories.find((category) => category.id === "nisan")?.images ?? [];

  if (stage === "engagement" && engagementImages.length > 0) {
    return engagementImages.slice(0, 12);
  }

  if (stage === "wedding") {
    return featuredGeneralImages;
  }

  return featuredGeneralImages;
}
