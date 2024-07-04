import React, { useState, useEffect } from 'react';

const Timer = () => {
    const initialSeconds = 1800; // Начальное количество секунд (30 минут)
    const [seconds, setSeconds] = useState(
        parseInt(localStorage.getItem('timerSeconds')) || initialSeconds
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds > 0) {
                    const updatedSeconds = prevSeconds - 1;
                    localStorage.setItem('timerSeconds', updatedSeconds); // Сохраняем текущее время в LocalStorage
                    return updatedSeconds;
                } else {
                    clearInterval(interval); // Останавливаем интервал, когда время истекло
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
    }, []);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const renderTime = () => {
        if (seconds === 0) {
            return <span className={'text-red-600 text-[1.2em]'}>Заказ истек</span>;
        } else {
            return <span className={'text-[1.4em] text-[#f7931a]'}>{formatTime(seconds)}</span>;
        }
    };

    return (
        <>{renderTime()}</>
    );
};

export default Timer;
