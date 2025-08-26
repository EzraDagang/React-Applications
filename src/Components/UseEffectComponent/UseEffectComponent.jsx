import React, { useState, useEffect } from 'react';

function UseEffectComponent() {

    const [count, setCount] = useState(0);
    const [colour, setColour] = useState("green")
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `Size ${width} x ${height}`;
    }, [height, width]);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    const addCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    const subtractCount = () => {
        setCount(prevCount => prevCount - 1);
    }

    const changeColour = () => {
        setColour(prevColour => prevColour === "green" ? "red" : "green");
    }

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <p style={{ color: colour }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColour}>Change Colour</button>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    )
}

export default UseEffectComponent;