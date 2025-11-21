'use client';
import { useState, useEffect } from 'react';

export function Timer({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, targetDate]); 

    return (
        <div className="timer-container">
            <div className="timer-box">
                <h2 className="timer-number">{timeLeft.days || 0}</h2>
                <p className='timer-param'>Gün</p>
            </div>
            <div className="timer-box">
                <h2 className="timer-number">{timeLeft.hours || 0}</h2>
                <p className='timer-param'>Saat</p>
            </div>
            <div className="timer-box">
                <h2 className="timer-number">{timeLeft.minutes || 0}</h2>
                <p className='timer-param'>Dakika</p>
            </div>
            <div className="timer-box">
                <h2 className="timer-number">{timeLeft.seconds || 0}</h2>
                <p className='timer-param'>Saniye</p>
            </div>
        </div>
    );
}