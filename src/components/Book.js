import React, { useState } from "react";
import im from './../images/slots/slot_1.PNG'
export const Book = (props) => {
    const [v_no, setvno] = useState('');
    const [in_time, setintime] = useState('');
    const [out_time, setouttime] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Slot booked successfully.\nSlot no. is "+Math.floor((Math.random() * 10) + 1));
        var cat = localStorage.getItem('count');
        cat=cat-1;
        localStorage.setItem('count', cat);
        alert(<img src={im} alt='bg'></img>);
    }
    return (
    
    <div className="auth-form-container">
            <h2>Book</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="v_no">Vehicle Number</label>
                <input value={v_no} onChange={(e) => setvno(e.target.value)}type="v_no"  id="vno" name="vno" />
                <label htmlFor="in_time">In-Time</label>
                <input value={in_time} onChange={(e) => setintime(e.target.value)} type="time" id="intime" name="intime" />
                <label htmlFor="out_time">Out-Time</label>
                <input value={out_time} onChange={(e) => setouttime(e.target.value)} type="time" id="outtime" name="outtime" />
                <button type="submit">Book</button>
            </form>
        </div>
    
  )
}

export default Book