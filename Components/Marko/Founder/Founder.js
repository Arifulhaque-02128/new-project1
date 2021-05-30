import React from 'react';
import styles from "./Founder.module.css";


const data = [
    {
        name: "Tasbin",
        designation: "CEO | Sales & Marketing Specialist",
        email: "t@markopolo.ai",
        description: "Formerly headed operations in Visual AI startup Gaze Technology. Consulted several Government Projects of ICT division of Bangladesh, a2i and UN. Worked as IoT Engineer for Datasoft Systems Bangladesh Limited, Bangladesh's one of the largest software company. Find her on twitter & LinkedIn."
    },
    {
        name: "Rubaiyat",
        designation: "COO | Product Manager & Designer",
        email: "r@markopolo.ai",
        description: "Built TiGrow - a Global SaaS Product from scratch, done Pro-bono in fund raising for establishing Bangladesh's largest E-waste recycling plant, co-founded Bangladesh's first and largest undergrad community for Entrepreneurs. Find him on twitter & LinkedIn ."
    },
    {
        name: "Zaman",
        designation: "CTO | Machine Learning Engineer & Backend Developer",
        email: "z@markopolo.ai",
        description: "Worked as Data Scientist in Blackbird.ai - provides real-time actionable insights for disinformation countermeasures to governments. Worked as Software Developer ZeitDice. Find him on twitter & LinkedIn ."
    }
]

const Founder = () => {
    return (
        <div className={styles.container}>
            {
                data.map((d, idx) =>
                    <div key={idx}>
                        <div> 
                            <h2>{d.name}</h2>
                            <p style={{fontWeight: "500", fontSize: "18px"}} >{d.designation}</p>
                        </div>
                        <div style={{margin: "2rem 0rem"}}> 
                            <a style={{fontWeight: "500"}} href={`mailto:${d.email}`}> {d.email} </a>
                        </div>
                        <div style={{marginBottom: "2rem"}}> 
                            <p style={{fontWeight: "500"}} >{d.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Founder;
