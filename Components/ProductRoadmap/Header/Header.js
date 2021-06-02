import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <div style={{width: "35vw", margin: "2rem auto"}}>
                <p style={{fontWeight: "500", fontSize: "18px"}}>Product Roadmap</p>
                <h1 style={{fontWeight: "700"}}>Shape the Product</h1>
                <p style={{fontWeight: "500", fontSize: "18px"}}>Let us know your feature requests, Upvote upcoming features, Know what’s been made for you. It’s a product made for and by you.</p>
            </div>
            <div style={{textAlign: "center", margin: "0rem auto"}}>
                <img className={styles.heroImg} src="/headerImg.png" alt="hero" />
            </div>
        </div>
    );
};

export default Header;