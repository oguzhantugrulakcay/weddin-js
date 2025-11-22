export default function Hero({ bride, groom, subtitle, date, backgroundImage }) {
    return (
        <div className="hero">
            <div
                className="hero-background"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="hero-texts font-ballet">
                <h1 className="hero-title">{`${bride.name} ${bride.surname}`}<br /> & <br />{`${groom.name} ${groom.surname}`}</h1>
                <p className="hero-subtitle">{subtitle}</p>
                <p className="hero-date">{date}</p>
            </div>
        </div>
    );
}