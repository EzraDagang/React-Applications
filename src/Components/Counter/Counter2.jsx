import React, { useState } from 'react';
import styles from "./Counter.module.css";

function Counter2() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    } 

    const reset = () => {
        setCount(0);
        // setCount(prevCount => prevCount = 0);
    }

    return (
        <div className={styles.counterContainer}>
            <p className={styles.countDisplay}>{count}</p>
            <button className={styles.counterButton} onClick={decrementCount}>Decrement</button>
            <button className={styles.counterButton} onClick={reset}>Reset</button>
            <button className={styles.counterButton} onClick={incrementCount}>Increment</button>
        </div>
    )
}

export default Counter2;