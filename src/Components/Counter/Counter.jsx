import React, { useState } from 'react';
import styles from "./Counter.module.css";

function Counter() {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className={styles.counterContainer}>
            <p className={styles.countDisplay}>{count}</p>
            <button className={styles.counterButton} onClick={decrementCount}>Decrement</button>
            <button className={styles.counterButton} onClick={reset}>Reset</button>
            <button className={styles.counterButton} onClick={incrementCount}>Increment</button>
        </div>

        // <div className='counterContainer'>
        //     <p className='countDisplay'>{count}</p>
        //     <button className='counterButton' onClick={decrementCount}>Decrement</button>
        //     <button className='counterButton' onClick={reset}>Reset</button>
        //     <button className='counterButton' onClick={incrementCount}>Increment</button>
        // </div>
    )
}

export default Counter;