import PropTypes from 'prop-types';
import Image from 'next/image';

export function TimeLineItem({ title, description, location }) {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag">{location}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="circle"></span>
            </div>
        </div>
    );
}

TimeLineItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,

};

// TimeLine bileşeni sıralama ve map'leme işini yapacak.
// items prop'una varsayılan olarak boş bir dizi atıyoruz.
export function TimeLine({ items = [] }) {
    // Gelen diziyi tarihe göre küçükten büyüğe (kronolojik) sıralıyoruz.
    const sortedItems = [...items].sort((a, b) => a.date - b.date);

    return (
        <div className="timeline">
            {sortedItems.map((item, index) => {
                // Tek/çift sıralara göre resim ve metin kolonlarının sırasını değiştireceğiz.
                const isEven = index % 2 === 0;
                const imageOrderClass = isEven ? '' : 'order-lg-2'; 
                const textOrderClass = isEven ? '' : 'order-lg-1';
                const cardOrderClass = isEven ? 'timeline-right-card' : 'timeline-left-card';

                return (
                    <div key={item.id} className={`card ${cardOrderClass} mb-3`}>
                        <div className="row g-0"> {/* g-0: resim ve metin arasındaki boşluğu kaldırır */}
                            {/* Resim Kolonu */}
                            <div className={`col-lg-4 ${imageOrderClass}`}>
                                <Image 
                                    src={`/${item.image}`} 
                                    alt={item.title} 
                                    width={400} // Daha iyi oran için boyutları ayarlayabiliriz
                                    height={300}
                                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                />
                            </div>
                            {/* Metin Kolonu */}
                            <div className={`col-lg-8 ${textOrderClass}`}>
                                <div className="card-body">
                                    <TimeLineItem
                                        title={item.title}
                                        description={item.description}
                                        location={item.location}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

TimeLine.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        image: PropTypes.string
    })).isRequired
};