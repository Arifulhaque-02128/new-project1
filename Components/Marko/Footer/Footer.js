import React from 'react';
import footerStyle from './Footer.module.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={footerStyle.footer}>
            <div className={`${footerStyle.section1}`}>
                <div className={footerStyle.brandStyle}>
                    <img className={footerStyle.logo} src="/brand.png" alt="logo"/> <br/>
                    <h6 >Markopolo.ai</h6>
                    <a style={{ color: "black", textDecoration: "underline"}}  href="/">sales@markopolo.ai</a>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "4px"}}>
                    <img className={footerStyle.socialIcons} src="/messenger.png" alt="logo"/> <br/>
                    <img className={footerStyle.socialIcons} src="/twitter.png" alt="logo"/> <br/>
                    <img className={footerStyle.socialIcons} src="/linkedIn.png" alt="logo"/> <br/>
                    </div>
                </div>
                <div className={footerStyle.rowItems}>
                    <div >
                        <h5>Company</h5>
                        <p>About</p>
                        <p>Customers</p>
                        <p>Jobs</p>
                        <p>Blog</p>
                        <p>Team</p>
                    </div>
                    <div >
                        <h5>Resources</h5>
                        <p>Product Roadmap</p>
                        <p>Free Tools</p>
                        <p>Podcast</p>
                        <p>Help Center</p>
                    </div>
                    <div >
                        <h5>Contact</h5>
                        <p>Support</p>
                        <p>Sales</p>
                        <p>Request a Demo</p>
                    </div>
                </div>
            </div>
            <div className={`${footerStyle.section2}`}>
                <div >
                    <p>{year} all rights reserved</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly"}}>
                    <p style={{padding: "0rem 1rem", fontWeight: "600"}}>Privacy Policy</p>
                    <p style={{padding: "0rem 1rem", fontWeight: "600"}}>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;