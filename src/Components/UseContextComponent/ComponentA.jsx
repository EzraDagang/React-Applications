import React, { useState, createContext } from 'react';
import styles from "./Component.module.css";
import ComponentB from './ComponentB';

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Ezra");

    return (
        <div className={styles.box}>
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            
            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>

        </div>
    )
}

export default ComponentA;