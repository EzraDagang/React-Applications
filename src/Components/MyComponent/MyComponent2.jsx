// import React, { useEffect, useRef, useState  } from 'react';
import React, {useState} from 'react'
// import './MyComponent2.css';

function MyComponent2() {

    const style = {
        textAlign : "center"
    }
    //FOR CSS FUN ONLYYY
    // const cursorRef = useRef(null);

    // useEffect(() => {
    //     const moveCursor = (e) => {
    //         const { clientX, clientY } = e;
    //         const cursor = cursorRef.current;
    //         if (cursor) {
    //             cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    //         }
    //     };

    //     document.addEventListener('mousemove', moveCursor);
    //     return () => document.removeEventListener('mousemove', moveCursor);
    // }, []);

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }

    return (
        <div className="form-container" style={style}>
            <input value={name} onChange={handleNameChange} placeholder='name'/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number'/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">Gift Card</option>
            </select>
            <p>Payment: {payment}</p>

            {/* <label >
                <input type="radio" name='delivery' value="delivery" checked={shipping === "delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>

            <label>
                <input type="radio" name='delivery' value="pickup" checked={shipping === "pickup"} onChange={handleShippingChange}/>
                Pick Up
            </label> */}

            <label >
                <input type="radio" name='delivery' value="delivery" onChange={handleShippingChange}/>
                Delivery
            </label>

            <label>
                <input type="radio" name='delivery' value="pickup"  onChange={handleShippingChange}/>
                Pick Up
            </label>
            
            <p>Shipping: {shipping}</p>

            {/* <div ref={cursorRef} className="cursor-glow"></div> */}
        </div>
    )
}

export default MyComponent2;