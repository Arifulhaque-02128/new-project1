import React, { useState } from 'react';
import styles from '../styles/Variant.module.css'

const variant = () => {

    const [ variants, setVariants ] = useState([
        "Great prices, fast delivery", "Hands-down the best customer service in the country", "Visit our store",
        "inbox us for all your shopping needs", "Great prices, fast delivery", "Inbox us for all your shopping needs."
    ]);

    const [selectedVariant, setSelectedVariant] = useState([]);

    console.log(selectedVariant)

    return (
        <div style={{ margin: "3rem"}}>
            <h4> Video Copy Variant </h4>

            {
                selectedVariant?.map( (s, idx) =>
                <div 
                key={idx} 
                className={styles.selectedItemStyle} 

                onClick = { () => {
                    setSelectedVariant( Array.from( new Set
                        ( selectedVariant.find((item) => item === s) ? [...selectedVariant].filter((sv) => sv !== s) :  [s, ...selectedVariant]) 
                    ) )
                    setVariants( Array.from(new Set
                        ( variants.find((item) => item === s) ? [...variants.filter((va) => va !== s)] : [s, ...variants])) ) 
                    
                } }

                > {s} </div> 
                )
            }
            {
                variants?.map( (v, idx) => 
                    <div 
                    key={idx} 
                    className={styles.itemStyle} 

                    onClick = { () => {
                        setSelectedVariant( Array.from( new Set
                            ( selectedVariant.find((item) => item === v) ? [...selectedVariant].filter((sv) => sv !== v) :  [v, ...selectedVariant]) 
                        ) )
                        setVariants( Array.from(new Set
                            ( variants.find((item) => item === v) ? [...variants.filter((va) => va !== v)] : [v, ...variants])) ) 
                        
                    } }

                    > {v} </div>
                )
            }

            {/* {
                variants?.map( (v, idx) => 
                    <div 
                    key={idx} 
                    className={`${ selectedVariant.find((item) => item === v) ? styles.selectedItemStyle : styles.itemStyle}`} 

                    onClick = { () => {
                        setSelectedVariant( Array.from( new Set
                            ( selectedVariant.find((item) => item === v) ? [...selectedVariant].filter((sv) => sv !== v) :  [v, ...selectedVariant]) 
                        ) )
                        setVariants( Array.from(new Set( selectedVariant.find((item) => item === v) ? [...variants.filter((va) => va !== v), v] : [v, ...variants])) ) 
                        
                    } }

                    > {v} </div>
                )
            } */}

        </div>
    );
};

export default variant;