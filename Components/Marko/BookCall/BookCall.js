import React from 'react';
import styles from "./BookCall.module.css";

const BookCall = () => {
    return (
        <div className={styles.container}>
            <h2 style={{margin: "1rem 0rem"}}>We're Just one Call Away</h2>
            <p style={{margin: "1rem 0rem", fontWeight: "400", fontSize: "18px"}}>We would love to help you onboard! Please select your convenient time from below.</p>
            <button className={styles.callBtn} > Book a Call </button>
        </div>
    );
};

export default BookCall;