import React, { useState, useEffect } from 'react';
import styles from "./DigitalClock.module.css";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let hour = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();
        const meridiem = hour >= 12 ? "PM" : "AM";

        hour = hour % 12 || 12;

        return `${padZero(hour)}:${padZero(minute)}:${padZero(second)} ${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.clockContainer}>
                <div className={styles.clock}>
                    <span>{formatTime()}</span>
                </div>
            </div>
        </div>
    )
}

export default DigitalClock;