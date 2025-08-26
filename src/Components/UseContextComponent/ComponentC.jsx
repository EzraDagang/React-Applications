import React, { useState, useContext } from 'react';
import styles from "./Component.module.css";
import ComponentD from './ComponentD';
import { UserContext } from './ComponentA';

function ComponentC() {
    const user = useContext(UserContext)

    return (
        <div className={styles.box}>
            <h1>ComponentC</h1>
            <h2>{`Sup ${user}`}</h2>
            <ComponentD/>

        </div>
    )
}

export default ComponentC;