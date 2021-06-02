import React from 'react';
import styles from './Feature.module.css';

const data = [
    {
        title: "Google Sign Up",
        details: "Signing up with Google Account", 
        color: "#FFC0C0"
    },
    {
        title: "TikTok - Platform Request",
        details: "Add TikTok marketing", 
        color: "#FAFFC1"
    },
    {
        title: "Custom Targeting",
        details: "Let user set targeting variables, i.e, demography etc", 
        color: "#B7FFFB"
    }
]

const UpcomingFeatures = () => {
    return (
        <div style={{ margin: "5rem 1rem 1rem 1rem"}}>
            <h2 style={{margin: "1rem 0rem"}}> Upcoming Features </h2>
            {
                data?.map((d, idx) => 
                    <div style={{display: "flex", alignItems: "center"}} key={idx}>
                        <div style={{backgroundColor: d.color, padding: "1rem 1.5rem", borderRadius: "2px"}}>{idx+1}</div>
                        <div style={{margin: "1rem 0rem 0rem 2rem"}}>
                            <p style={{fontWeight: "500" , fontSize: "18px"}}>{d.title} <br /> 
                            <span style={{fontWeight: "400" , fontSize: "16px"}}>{d.details}</span></p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default UpcomingFeatures;