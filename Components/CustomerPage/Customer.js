import React from 'react';
import styles from './Customer.module.scss';

const Customer = () => {

    return (
        <div className={styles.container}>
            <div>
                <h5>Company Name : </h5>
                <p style={{marginLeft: "0.3rem", fontSize: "17.5px"}}>Manha</p>
            </div>
            <div>
                <img src="/company_logo.png" alt="Logo" />
            </div>
            <div>
                <h2>"Honestly, I didn't have expectations for day one conversions. But, here I am. Proven wrong by Markopolo. I couldn't be any happier."</h2>
            </div>

            <main style={{marginTop: "2rem"}}>
                <div>
                    <h5 >User Case: </h5>
                    <p style={{marginLeft: "0.3rem", fontSize: "17.5px"}}>Getting conversions for a new clothing business for a low budget.</p>
                </div>
                <section>
                    <h5>Description:
                    <span className={styles.description}> Manha is a modest fashion brand that sells premium quality hijab and abayas. They had trouble with acquiring new customers and getting sales on time. Building a new brand from scratch takes a lot of time, and for 'Manha,' it is not any different. Targeting a cold audience when you have no data about the target audience of the specific brand is a risk. Especially when the client is on a deadline of conversions, and there's no scope of testing audiences. <br /> <br />
                    On top of that, Manha was relatively new and had been running their business for a few months. Calculating the obstacles, we took the approach of understanding the brand first. Getting details about the previous audience and the potential audiences Manha wants to target is our priority. We decided on three prime audiences that we thought were perfect and chose to go with the top two for the first two campaigns. It's quite normal to see people engaging with your product and content after the first initial two days. But our initial research was done for the first two campaigns for EID, and expectations were set.  <br /> <br />
                    On day one, we achieved conversions for Manha from both of the campaigns. Our obstacles here low budget for the promotions, no time for testing, and less information. Our ROAS for the campaign was accomplished by 60%  on day one, and we were able to go beyond the initial ad spent after the campaigns were finished. Manha saw a rise in page likes, engagement & most importantly, Conversions & Leads. 
                    </span> </h5>
                </section>
            </main>
           
        </div>
    );
};

export default Customer;