import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const date_range = () => {

    const [showDatePicker, setShowDatePicker] = useState(false);

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const handleSelect = (ranges) => {
        console.log(ranges);
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    return (
        <div style={{margin: "1rem 15rem", textAlign: "center"}}>
            <button style={{ backgroundColor: "#ff7778", border: "1px solid tomato", padding: "1rem 2rem ",
            borderRadius: "0.3rem", width : "45vw", margin: "2rem auto", color: "white"}} onClick={() => setShowDatePicker(!showDatePicker)}>
                { showDatePicker ? "Hide" : "Pick Date"} 
            </button> <br />
            {
                showDatePicker ? 
                <div style={{border: "1px solid white", padding: "1rem", width: "45vw", margin: "0 auto", borderRadius: "0.5rem", backgroundColor: "#d8bfd8"}}>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                    /> 
                </div> : null
            }

        </div>
    );
};

export default date_range;