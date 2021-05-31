import React from 'react';
import styles from './Customers.module.css';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';



const customers = [
    {
        name : "IBM",
        img_url : "https://images.ctfassets.net/h6ufgtwb6nv1/2ULNc7zAA1CfR8e0f7Oe0v/b8c78e54d61f62f732a277c71b439a1d/ibm_logo.png",
        excerpt : "IBM standardizes data across its cloud platform with Segment",
        industry : "b2b tech"
    },
    {
        name : "Rokfin",
        img_url : "https://images.ctfassets.net/h6ufgtwb6nv1/79iFRlEfxeQzgWB7x4pSpI/2809c2d11a7e8de062ed6c47ef3e6f33/rokfin_logo.png",
        excerpt : "Rokfin uses Segment to unlock powerful new customer journey insights",
        industry : "b2b tech"
    },
    {
        name : "edX",
        img_url : "https://images.ctfassets.net/h6ufgtwb6nv1/6HW9LIrBOehUry16MV5wno/924ea478bc4222990783831992f23f23/edx-ff7b38a0bc.svg",
        excerpt : "How edX uses Segment for product and business analytics",
        industry : "education"
    },
    {
        name : "Frame.io",
        img_url : "https://images.ctfassets.net/h6ufgtwb6nv1/5qWI5X1BVOP8DbRpHNymGe/3237e2a0bbe1d50bc25e8c14ff48fcca/frame.io.svg",
        excerpt : "Frame.io uses Personas to reduce the time to resolve support tickets by 80%",
        industry : "b2b tech"
    },
    {
        name : "PagerDuty",
        img_url : "https://images.ctfassets.net/h6ufgtwb6nv1/6ywhqrv2NLKUg7wjxjE5Uv/8ddfaca6ac3eb1fd05638a3880081700/1280px-PagerDuty-GreenRGB.svg.png",
        excerpt : "How fast-growing PagerDuty uses Segment and Pendo to scale user onboarding",
        industry : "b2b tech"
    },
    {
        name : "Drift",
        img_url : "https://images.ctfassets.net/h6ufgtwb6nv1/2Ns2YpzyNGfltP16eOqfZS/b613cc72708bebaf59cc464555b8b999/personas-testimonial-drify-logo.svg",
        excerpt : "How Drift uses Personas to convert high-intent leads",
        industry : "b2b tech"
    },
    {
        name : "Travel Perk",
        img_url : "https://images.ctfassets.net/h6ufgtwb6nv1/6yBksjHdNjtsKfsP5pV7Ct/3c7b8f89d6292c13fbf6a63e00b433eb/logo_travelperk_color.svg",
        excerpt : "How TravelPerk breaks down data silos with Segment",
        industry : "b2b tech"
    },
    {
        name : "Breather",
        img_url : "https://images.ctfassets.net/h6ufgtwb6nv1/7ktreSGY4IWn2KAtC6NbUa/0179abec8ae1ba8068817f9a0cff4e4c/breather.svg",
        excerpt : "How Breather uses Segment to get better ROI on ads",
        industry : "marketplaces"
    },
    {
        name : "UP tv",
        img_url : "https://images.ctfassets.net/h6ufgtwb6nv1/7g7IM5cFvhbs8dDXRwQRiM/e5c0ab0189001c3f4a8e762a1d99b26e/uptv-orange-hi-res.png",
        excerpt : "UP Entertainment optimizes campaign engagement to decrease churn with Segment",
        industry : "media"
    },
]

const Header = () => {
    return (
        <div className={styles.container}>
            {
                customers?.map(( customer, idx) => 
                    <div className={styles.card} key={idx}> 
                        <img src={customer.img_url} alt={customer.name} />
                        <p>{customer.excerpt}</p>
                        <HiOutlineChevronDoubleRight className={styles.nextIcon} size={30} />
                    </div>
                )
            }
        </div>
    );
};

export default Header;