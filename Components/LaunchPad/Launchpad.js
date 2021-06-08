import React from 'react';
import styles from './Launchpad.module.scss';
import { AiOutlineRightCircle } from 'react-icons/ai'

const Launchpad = () => {
    return (
        <div>
            <div className={styles.container} >
                <div className={styles.textContainer} style={{textAlign: "left"}}>
                    <h3>OWN <span> YOUR </span> BUSINESS</h3>
                    <p>Our equity-free capital products are tailor-made for founders in all stages of their journey. Investments range from 10K to 10M and are repaid via a revenue share agreement, plus a flat 6-12% fee. Scale your company and maintain 100% ownership and control.</p>
                    <button> Read More <AiOutlineRightCircle style={{marginLeft: "0.1rem"}} size={20}/> </button>
                </div>
                <div className={styles.imgContainer} style={{marginLeft: "5rem"}}>
                    <img src="" alt="ing" />
                </div>
            </div>


            <div className={styles.container}>

                <div className={styles.imgContainer} style={{marginRight: "5rem"}}>
                    <img src="" alt="ing" />
                </div>

                <div className={styles.textContainer} style={{textAlign: "right"}}>
                    <h3>Get the cash from your <span> future </span> sales today</h3>
                    <p>Our equity-free capital products are tailor-made for founders in all stages of their journey. Investments range from 10K to 10M and are repaid via a revenue share agreement, plus a flat 6-12% fee. Scale your company and maintain 100% ownership and control.</p>
                    <button> Read More <AiOutlineRightCircle style={{marginLeft: "0.1rem"}} size={20}/> </button>
                </div>
            </div>



            <div className={styles.container}>

                <div className={styles.textContainer} style={{textAlign: "left"}}>
                    <h3> <span> GROW </span>  WITH OUR GROWTH CAPITAL</h3>
                    <p>Markopolo Launch Pad will provide Equity free micro investment as Growth Capital for early stage small businesses and micro entrepreneurs that maximizes their potential by repayment of the investment via revenue share model. </p>
                    <button> Read More <AiOutlineRightCircle style={{marginLeft: "0.1rem"}} size={20}/> </button>
                </div>
                
                <div className={styles.imgContainer} style={{marginLeft: "5rem"}}>
                    <img src="" alt="ing" />
                </div>
            </div>



            <div className={styles.container}>
                
                <div className={styles.textContainer} style={{textAlign: "left"}}>
                    <h3> FOR THE INVESTORS </h3>
                    <p>Markopolo Launch Pad's products are 'Equity free micro-investment as Growth Capital' which are sold in a marketplace, from where investors can buy these financial products, Markopolo gets a percentage from this investment.  For investment up to 10,000 BDT its 10%, For investment from 10,001 to 25,000 BDT its 8%, For investment from 25,001 to 50,000 BDT its 6%, For investment above 50,000 BDT its flat 4%.</p>
                    <button> Read More <AiOutlineRightCircle style={{marginLeft: "0.1rem"}} size={20}/> </button>
                </div>
                
                <div className={styles.imgContainer} style={{marginLeft: "5rem"}}>
                    <img src="" alt="ing" />
                </div>
            </div>



            <div className={styles.scaleContainer}>
                <h3> WE ENSURE <span> YOUR  </span> BUSINESS & INVESTMENTS ARE  </h3>
                <div>
                    <div className={styles.circularCard}>
                        <img src="/launchpad/scalable.png" alt="scalable" />
                        <p>SCALABLE</p>
                    </div>
                    <div className={styles.circularCard}>
                        <img src="/launchpad/profitable.png" alt="profitable" />
                        <p>PROFITABLE</p>
                    </div>
                    <div className={styles.circularCard}>
                        <img src="/launchpad/repeatable.png" alt="repeatable" />
                        <p>REPEATABLE</p>
                    </div>
                </div>

                <div className={styles.rectCard}>
                    <div>
                        <h4>4,500+</h4>
                        <p>Business Funded</p>
                    </div>
                    <div>
                        <h4>67 Million+</h4>
                        <p>Invested To Date</p>
                    </div>
                    <div>
                        <h4>37</h4>
                        <p>Districts</p>
                    </div>                
                </div>
            </div>


        </div>
    );
};

export default Launchpad;