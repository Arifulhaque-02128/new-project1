import React from 'react';
import { useForm } from "react-hook-form";
import styles from './Feature.module.css';

const FeatureForm = () => {

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

                <input className={styles.sendBtn} type="submit" value="Send" />
            </form>
            <p ></p>
        </div>
    );
};

export default FeatureForm;