import React from 'react';
import styles from "./JoinBeta.module.css";

const JoinBeta = () => {
    return (
        <div className={styles.container}>
            <h2 style={{margin: "1rem 0rem"}}>Get Early Close Beta Access</h2>
            <h5 style={{margin: "1rem 0rem"}}>If you don’t see results within 7 days, we’ll give 6 months free access.</h5>
            <div className={styles.inputField}>
                <input type="email" placeholder="Enter your email" />
                <button className={styles.joinBtn} > Join Early Beta </button>
            </div>
        </div>
    );
};

export default JoinBeta;