import React, { useState } from "react";
import styles from "./service.module.css"
import services from "../../Data/services.json"
import { NavLink } from "react-router-dom"

function Services() {

    return (
        <>
            <div className={styles.mainContainer} >
                <h1>Services</h1>
                <div className={styles.container}>

                    {
                        services.map((service, id) => (
                            <div key={id} className={styles.serviceContainer}>

                                <div className={styles.title}>
                                    <h2>{service.title}</h2>
                                </div >
                                <div className={styles.content}>
                                    <p>{service.content}</p>
                                </div>
                                <div className={styles.price}>

                                    <p>Only:{service.price}/-</p>
                                    <button className={styles.button}>
                                        <NavLink to="/contact">Get Service</NavLink>
                                    </button>




                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
        </>
    )


}

export default Services