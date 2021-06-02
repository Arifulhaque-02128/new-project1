import React from 'react';
import styles from './Feature.module.css';
import { IoMdArrowDropup } from 'react-icons/io';

const data = [
    {
        title: "Google Sign Up",
        details: "Signing up with Google Account", 
        icon: "medal",
        amount: 32
    },
    {
        title: "TikTok - Platform Request",
        details: "Add TikTok marketing", 
        icon: "medal",
        amount: 112
    },
    {
        title: "Custom Targeting",
        details: "Let user set targeting variables, i.e, demography etc", 
        icon: "medal",
        amount: 21
    },
    {
        title: "Email Marketing",
        details: "Mark automates Email Marketing pipeline", 
        icon: "cup",
        amount: 202
    },
    {
        title: "Designer Marketplace",
        details: "A curated designer market place to instantly hire from", 
        icon: "medal",
        amount: 5
    }
]

const Requests = () => {
    return (
        <div style={{ margin: "1rem"}}>
            <h2 style={{margin: "2rem 0rem"}}> Feature Requests </h2>
            {
                data?.map( (d, idx) => 
                    <div key={idx} className={styles.requestCard}> 
                        <div className={styles.leftSide}> 
                            <img src={`/${d.icon}.png`} alt={d.icon} />
                            <div>
                                <p style={{fontWeight: "500" , fontSize: "18px"}}>{d.title} <br /> 
                                <span style={{fontWeight: "400" , fontSize: "16px"}}>{d.details}</span></p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", margin: "0rem 0.5rem"}}>
                            <div>
                                <IoMdArrowDropup style={{cursor: "pointer"}} size={30} />
                                <p style={{textAlign: "center"}}>{d.amount}</p>
                            </div>
                            <button className={styles.requestBtn}> Upvote </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Requests;