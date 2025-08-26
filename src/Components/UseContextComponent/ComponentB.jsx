import React, { useState, createContext } from 'react';
import styles from "./Component.module.css";
import ComponentC from './ComponentC';

function ComponentB() {
    return (
        <div className={styles.box}>
            <h1>ComponentB</h1>
            <ComponentC/>
        </div>
    )
}

export default ComponentB;