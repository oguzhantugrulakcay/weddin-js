export default function RSVP() {
    return (
        <div className="container rsvp">
            <h2>Geliyorsunuz değil mi?</h2>
            <form className="rsvp-form form-control text-start">
                <div className="row">
                    <div className="col">
                        <label htmlFor="name">İsim:</label>
                        <input type="text" id="name" name="name" className="form-control" required />
                    </div>
                    <div className="col">
                        <label htmlFor="attendance">Kişi Sayısı:</label>
                        <input type="number" id="attendance" name="attendance" className="form-control" required />
                    </div>
                </div>
            </form>
        </div>
    );
}