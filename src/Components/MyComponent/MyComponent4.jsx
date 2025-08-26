import React, { useState } from 'react';

function MyComponent4() {

    const [foods, setFoods] = useState(["Orange", "Banana", "Apple"]);
    const [newFood, setNewFood] = useState("");

    const handleAddFood = () => {
        setFoods(prevFoods => ([...prevFoods, newFood]));
        setNewFood("");
    }

    const handleRemoveFood = (removeIndex) => {
        setFoods(prevFoods => prevFoods.filter((_, index) => index !== removeIndex));
        // setFoods(prevFoods => prevFoods.filter(prevFood.index !== index))
    }

    return (
        <div>
            <h2>List of food</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter a food' value={newFood} onChange={(e) => setNewFood(e.target.value)} /><br />
            <button onClick={handleAddFood}>Submit food</button>
        </div>
    )
}

export default MyComponent4;


{/* 
    -------------------------------------
    ARRAY IN OBJECT
    -------------------------------------

    const [data, setData] = useState({ 
        user: "Alice",
        foods: ["Banana", "Apple"]
    });

    -------------------------------------
    UPDATING ARRAY IN OBJECT
    -------------------------------------

    setData(prevData => ({
        ...prevData, // keep other properties like user
        foods: [...prevData.foods, "Orange"] // new array
    }));

    -------------------------------------
    REMOVING KEY FROM OBJECT
    -------------------------------------
    
    setUser(prevUser => {
        const { age, ...rest } = prevUser;
        return rest;
    });
    
*/}