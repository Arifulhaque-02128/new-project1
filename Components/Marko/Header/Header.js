import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <div style={{width: "50vw", textAlign: "center", margin: "0rem auto", marginTop: "3rem"}}>
                <h1 style={{fontWeight: "700"}}>We’re making digital advertising accesible to everybody</h1>
                <p style={{fontWeight: "400", fontSize: "18px"}}>Markopolo gives teams the tools they need to put their digital advertising in auto pilot, manage their ad campaigns and connect with their audiences in more personal ways</p>
            </div>
            <div style={{textAlign: "center", margin: "0rem auto"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.48" d="M0,160L60,181.3C120,203,240,245,360,234.7C480,224,600,160,720,144C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className={styles.heroImgContainer}>
                <img className={styles.heroImg1} src="/people1.png" alt="people1"/>
                <img className={styles.heroImg2} src="/people2.png" alt="people2"/>
                <img className={styles.heroImg3} src="/people3.png" alt="people3"/>
            </div>
            </div>
        </div>
    );
};

export default Header;