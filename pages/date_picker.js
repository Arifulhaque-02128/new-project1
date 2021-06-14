import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { fetchDate } from '../Store/Actions/Actions';

const datePicker = ({stateDate, handleDateChange}) => {

    const myDate = stateDate;

    console.log("from redux store: ", myDate.toISOString())
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div style={{margin: "5rem 10rem"}}>
            <h2>Choose a date </h2>
            <DatePicker selected={startDate} onChange={(date) => {
                setStartDate(date)
                handleDateChange(date)
            }} />
        </div>
    );
};

function mapStateToProps(state) {
    return { 
        stateDate: state.date
    }
}

const mapDispatchToProps = {
    handleDateChange: fetchDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(datePicker);