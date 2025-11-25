export default function Hero({ bride, groom, subtitle, date, backgroundImage }) {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar
    const year = dateObj.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    return (
        <div className="hero">
            <div
                className="hero-background"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="hero-texts font-ballet">
                <h1 className="hero-title">{`${bride.name}`}<br /> & <br />{`${groom.name}`}</h1>
                <p className="hero-subtitle">{subtitle}</p>
                <p className="hero-date">{formattedDate} {formattedTime}</p>
            </div>
        </div>
    );
}