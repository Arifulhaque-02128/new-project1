import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './Feature.module.css';

const FeatureForm = () => {

    const [open, setOpen] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset()
        console.log(data)
    };

    return (
        <div style={{margin: "3em 0rem"}}>
            <h3 style={{margin: "1rem 0rem"}}>Want to request a feature?</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label style={{fontWeight: "600" , fontSize: "18px"}}>Feature Name</label> <br />
                <input type="text" className={styles.formStyle} {...register("name", { required: true })} placeholder="Write a name" /> <br />
                {errors.name && <span style={{color: "red"}}>This field is required</span>}
                <br /> <br />

                <label style={{fontWeight: "600" , fontSize: "18px"}}>Give a small description</label> <br />
                <textarea rows="4" className={styles.formStyle} {...register("description", { required: true })} placeholder="Give a small description" ></textarea> <br />
                {errors.description && <span style={{color: "red"}}>This field is required</span>}
                <br /> <br />

                <label style={{fontWeight: "600" , fontSize: "18px"}}>Email Address</label> <br />
                <input type="email" className={styles.formStyle} {...register("email", { required: true })} placeholder="Your mail address" /> <br />
                {errors.email && <span style={{color: "red"}}>This field is required</span>}
                <br /> <br />

                <input className={styles.sendBtn} onClick={() => setOpen(true)} type="submit" value="Send" />
            </form>
            {
                open ? 
                    <div className={styles.popup}> 
                        <div style={{width: "60px", height: "60px", margin: "1rem auto"}}> 
                            {/* <div className={styles.drawn} style={{maxWidth: "50px", maxHeight: "50px"}}> </div>
                                <svg version="1.1" id="tick" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 37 37" style={{ enableBackground: "new 0 0 37 37" }} xmlSpace="preserve">
                                    <path className={`${styles.circ} ${styles.path}`} style={{fill:"none", stroke:"#32CD32",strokeWidth:"2.5", strokeLinejoin:"round", strokeMiterLimit:"10" }} d="
                                        M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
                                        />
                                    <polyline className={`${styles.tick} ${styles.path}`} style={{fill:"none", stroke:"#32CD32",strokeWidth:"2.5", strokeLinejoin:"round", strokeMiterLimit:"10" }} points="
                                        11.6,20 15.9,24.2 26.4,13.8 "/>
                                </svg> */}
                                <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                    <circle className={styles.checkmark__circle} cx="26" cy="26" r="25" fill="none"/>
                                    <path className={styles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>

                        </div>

                        <h4 style={{ fontSize: "26px"}}>Thank you so much for booking a demo! We'll reach out to you!</h4>
                        <p className={styles.cancel} onClick={() => setOpen(false)}>&times;</p>
                    </div> : null
            }


            {/* <p ></p> */}
        </div>
    );
};

export default FeatureForm;