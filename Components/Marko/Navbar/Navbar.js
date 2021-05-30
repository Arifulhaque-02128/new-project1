import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div>
            <p className={styles.headerText}>🎉 <a href="/"> Join </a> today, to get early access to our closed Beta and Get exclusive offers 🎊</p>
        

            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center"}} >
                <img className={styles.logoStyle} src="/brand.png" alt="logo" />
                <div className={styles.midItems}>
                    <a href="/">Features</a>
                    <a href="/">Exclusive Offers</a>
                    <a href="/">Blog</a>
                    <a href="/">Success Story</a>
                </div>
                <button className={styles.loginBtn}> Beta Login </button>
            </div>
        </div>
    );
};

export default Navbar;