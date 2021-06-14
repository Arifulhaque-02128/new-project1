import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './BookCall.module.css';


const BookCall  = () => {

    const apiKey = process.env.AIRTABLE_BOOKCALL_API_KEY;

    const axiosConfig = {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
    }

    const [open, setOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data, e) => {
        e.target.reset()
        const dataToSend = {
            records : [
                {
                    fields : data,
                }
            ]
        }
        console.log("data to send : ", dataToSend)

        await axios.post(
            "https://api.airtable.com/v0/appPYSX4nNUd8cRxw/applicant_info",
            dataToSend,
            axiosConfig
        ).then((response) => {
            console.log(response)
            setIsSubmitted(true)
        })
        .catch((err) => console.log(err))

    };

    return (
        <div style={{margin: "5rem 3rem"}}>
            <button 
            style={{margin: "5rem auto", padding: "0.5rem 1rem", backgroundColor: "#ff7778", border: "1px solid tomato", borderRadius: "4px", color: "white"}} onClick={() => setOpen(true)}> Book A Call </button>
            
            {
                open && ( isSubmitted ?

                    <div className={styles.popup}> 
                        <div style={{width: "60px", height: "60px", margin: "1rem auto"}}> 
                                <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                    <circle className={styles.checkmark__circle} cx="26" cy="26" r="25" fill="none"/>
                                    <path className={styles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                        </div>

                        <h4 style={{ fontSize: "26px", textAlign: "center"}}>Thank you so much for booking a call! We'll reach out to you!</h4>
                        <p className={styles.cancelForSuccess} onClick={() => setOpen(false)}>&times;</p>
                        
                    </div> :  

                    <div className={styles.popup}> 

                        <h4 style={{ fontSize: "26px", textAlign: "center"}}>Submit the form, please!</h4>
                        <p className={styles.cancel} onClick={() => setOpen(false)}>&times;</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label style={{fontWeight: "600" , fontSize: "18px"}}> Name </label> <br />
                            <input type="text" className={styles.formStyle} {...register("name", { required: true })} placeholder="Your Name" /> <br />
                            {errors.name && <span style={{color: "red"}}>This field is required</span>}
                            <br />

                            <label style={{fontWeight: "600" , fontSize: "18px"}}> Company Name </label> <br />
                            <input type="text" className={styles.formStyle} {...register("company_name")} placeholder="Company Name" /> <br /> <br />

                            <label style={{fontWeight: "600" , fontSize: "18px"}}> Current Position </label> <br />
                            <input type="text" className={styles.formStyle} {...register("position")} placeholder="Position" />
                            <br /><br />

                            <label style={{fontWeight: "600" , fontSize: "18px"}}> Country </label> <br />
                            <input type="text" className={styles.formStyle} {...register("country", { required: true })} placeholder="Country" /> <br />
                            {errors.country && <span style={{color: "red"}}>This field is required</span>} <br />

                            <label style={{fontWeight: "600" , fontSize: "18px"}}>Email Address</label> <br />
                            <input type="email" className={styles.formStyle} {...register("email", { required: true })} placeholder="Your mail address" /> <br />
                            {errors.email && <span style={{color: "red"}}>This field is required</span>}
                            <br /> <br />

                            <input className={styles.sendBtn} type="submit" value="Send" />
                        </form>

                    </div>)
            }

        </div>
    );
};

export default BookCall;