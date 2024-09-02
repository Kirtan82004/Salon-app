import React from "react";
import styles from "./about.module.css"



function About(){
    return (
        <>
      <div className={styles.aboutSection}>

        <div className={styles.aboutText}>
            <h1>About Us</h1>
            <p>At <span>[Sangeeta studio]</span>, we believe in bringing out the best in you. Our team of expert beauticians is dedicated to providing top-notch beauty services tailored to meet your individual needs. With years of experience in the industry, we pride ourselves on our professionalism and attention to detail. Our mission is to make you feel confident and beautiful.</p>
        </div>
        <div className={styles.aboutImage}>
          
        </div>
      </div>
        </>
    )
}

export default About;