import React, { useState } from 'react';
import "./ColourPicker.css";

function ColourPicker() {

    const [colour, setColour] = useState("#FFFFFF");

    const style = {
        backgroundColor: colour,
    }

    const handleColourChange = (e) => {
        setColour(e.target.value);
    }

    return (
        <div className='colour-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={style}>
                <p>
                    <span style={{display: "block"}}>Selected Colour: </span>
                    <span>{colour}</span>
                </p>
            </div>
            <label htmlFor='colourInput'>Select a Colour:</label>
            <input type="color" id='colourInput' value={colour} onChange={handleColourChange}/>
        </div>
    )
}

export default ColourPicker;