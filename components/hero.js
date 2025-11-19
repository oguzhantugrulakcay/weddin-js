export default function Hero({ title, subtitle, date, backgroundImage }) {
    return (
        <div className="hero">
            <div
                className="hero-background"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="hero-texts font-ballet">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-subtitle">{subtitle}</p>
                <p className="hero-date">{date}</p>
            </div>
        </div>
    );
}