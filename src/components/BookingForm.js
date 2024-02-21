import react from "react";
import React, { useState } from 'react';


const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOcassion] = useState("");

    const handleSubmit = (e) => {
       e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispach(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlfor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                        </div>
                    
                        {/* for time selection*/}
                        <div>

                            <label htmlfor='book-time'>Choose Time</label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value=''>Select Time</option>
                                {
                                   props.availableTimes.availableTimes.map(availableTimes => {return <option key=
                                {availableTimes}>{availableTimes}</option>})

                                } 
                                
                            </select>
                        </div>

                        {/* for number of guests*/}
                        <div>
                            <label htmlfor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
                        </div>

                        {/* for occasion*/}
                        <div>
                            <label htmlfor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOcassion(e.target.value)} required>
                               <option>Birthday</option>
                               <option>Anniversary</option>
                            </select>
                        </div>
                        {/* for submit button*/}
                        <div className='btnReceive'>
                            <input aria-label='On Click' type={'submit'} value={'Make Your Reservation'}></input>
                        </div>
                     </fieldset>
                    </form>
            </section>
        </header>
    );
};

export default BookingForm;