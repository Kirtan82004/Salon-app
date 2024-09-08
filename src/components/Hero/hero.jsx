import React from "react";
import styles from "./hero.module.css"
import { NavLink } from "react-router-dom";

function Hero() {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.heroContainer} id="hero">
                    <p className={styles.welcome}>Welcome to </p>
                    <div className={styles.animatedText}>
                        <span className={styles.logoText} id={styles.Sangeeta}>Sangeeta </span>
                        <span className={styles.logoText} id={styles.Makover}>Makover </span>
                        <span className={styles.logoText} id={styles.Studio}>Studio</span>

                    </div>
                
                    <p >Your Ultimate Destination for Beauty and Relaxation</p>
                    <p>Book your appointment now!</p>
                    <NavLink to="/getservice"><button className={styles.button}>Book Now</button></NavLink>
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.logoImage} src="/Sangeeta.png" />
                </div>

            </div>


        </>
    )
}

export default Hero;