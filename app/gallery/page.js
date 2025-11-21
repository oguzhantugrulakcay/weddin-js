import { Gallery } from "@/components/gallery";

export default function HomePage() {
    const today = new Date();
    return (
        <div className="container">
            <div className="container">
                <h1>Bizim Fotoğraflarımız</h1>
                <Gallery
                    galleryName=""
                    images={[
                        "images/bride.jpg",
                        "images/cover_bg_1.jpg",
                        "images/groom.jpg",
                        "images/cover_bg_2.jpg"
                    ]}
                />
            </div>
            {today < new Date("2026-01-03") && (
                <div className="container">
                    <h1>Nişan fotoğraflarımız</h1>
                    <Gallery
                    galleryName=""
                    images={[
                        "images/bride.jpg",
                        "images/cover_bg_1.jpg",
                        "images/groom.jpg",
                        "images/cover_bg_2.jpg"
                    ]}
                />
                </div>
            )}
            {today > new Date("2026-07-15") && (
                <div className="container">
                    <h1>Kına fotoğraflarımız</h1>
                    <Gallery
                    galleryName=""
                    images={[
                        "images/bride.jpg",
                        "images/cover_bg_1.jpg",
                        "images/groom.jpg",
                        "images/cover_bg_2.jpg"
                    ]}
                />
                </div>
            )}
            {today > new Date("2026-07-19") && (
                <div className="container">
                    <h1>Kına fotoğraflarımız</h1>
                    <Gallery
                    galleryName=""
                    images={[
                        "images/bride.jpg",
                        "images/cover_bg_1.jpg",
                        "images/groom.jpg",
                        "images/cover_bg_2.jpg"
                    ]}
                />
                </div>
            )}
        </div>
    );
}