import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg main-navbar sticky-top">
            <div className="container">
                <Link href="/" className="navbar-brand">
                    Hande & Oğuzhantuğrul
                </Link>
                {/* Mobil görünüm için Toggler Butonu */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href="/us" className="nav-link">Çift</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#story" className="nav-link">Hikayemiz</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#gallery" className="nav-link">Galeri</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;