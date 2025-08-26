import React, { useState } from 'react'

function MyComponent5() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const handleAddCar = () => {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel,
        }

        setCars(prevCars => ([...prevCars, newCar]));
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    const handleRemoveCar = (i) => {
        setCars(prevCars => prevCars.filter((_, index) => index !== i))
    }

    const handleCarYearChange = (e) => {
        setCarYear(e.target.value);
    }

    const handleCarMakeChange = (e) => {
        setCarMake(e.target.value);
    }

    const handleCarModelChange = (e) => {
        setCarModel(e.target.value);
    }

    return (
        <div>
            <h2>List of Car Objects</h2>

            <ul>
                {cars.map((car, index) => 
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleCarYearChange} /><br />
            <input type="text" value={carMake} onChange={handleCarMakeChange} placeholder='Enter car make' /><br />
            <input type="text" value={carModel} onChange={handleCarModelChange} placeholder='Enter car model' /><br />

            <button onClick={handleAddCar}>Submit Car</button>
        </div>
    )
}

export default MyComponent5;