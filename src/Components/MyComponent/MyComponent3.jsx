import React, { useState } from 'react';

function MyComponent3() {

    const [car, setCar] = useState({year: 2024, 
                                    make: "Perodua",
                                    model: "Myvi"});

    const handleYearChange = (e) => {
        setCar(prevCar => ({...prevCar, year: e.target.value}));
    }

    const handleMakeChange = (e) => {
        setCar(prevCar => ({...prevCar, make: e.target.value}));
    }

    const handleModelChange = (e) => {
        setCar(prevCar => ({...prevCar, model: e.target.value}));
    }

    return (
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        </div>
    )
}

export default MyComponent3;