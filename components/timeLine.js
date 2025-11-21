'use client';

import PropTypes from 'prop-types';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

function formatDate(d) {
    if (!(d instanceof Date)) return '';
    return d.toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).replace(',', ' -');
}

export function TimeLineItem({ title, description, location, date }) {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="date">{formatDate(date)}</p>
                <p className="tag">{location}</p>
                <span className="circle"></span>
            </div>
        </div>
    );
}

TimeLineItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
};

function TimeLine({ items = [] }) {
    const sortedItems = [...items].sort((a, b) => a.date - b.date);
    const revealRefs = useRef([]);

    useEffect(() => {
        const obs = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add('is-visible');
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
        );
        revealRefs.current.forEach(el => el && obs.observe(el));
        return () => revealRefs.current.forEach(el => el && obs.unobserve(el));
    }, [sortedItems]);

    return (
        <div className="timeline">
            {sortedItems.map((item, index) => {
                const isEven = index % 2 === 0;
                const imageOrderClass = isEven ? '' : 'order-lg-2';
                const textOrderClass = isEven ? '' : 'order-lg-1';
                const cardOrderClass = isEven ? 'timeline-right-card' : 'timeline-left-card';
                return (
                    <div
                        key={item.id}
                        ref={el => (revealRefs.current[index] = el)}
                        className="timeline-reveal-wrapper"
                        style={{ transitionDelay: `${index * 90}ms` }}
                    >
                        <div className={`card ${cardOrderClass} mb-3`}>
                            <div className="row g-0">
                                <div className={`col-lg-4 ${imageOrderClass}`}>
                                    <Image
                                        src={`/${item.image}`}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={`col-lg-8 ${textOrderClass}`}>
                                    <div className="card-body">
                                        <TimeLineItem
                                            title={item.title}
                                            description={item.description}
                                            date={item.date}
                                            location={item.location}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TimeLine;

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