import React, { useState } from "react";
import styles from "./GetService.module.css";
import service from "../../Data/services.json"

function GetService() {
    const [formData, setFormData] = useState({
        dateAndTime: "",
        selectService: ""

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('https://salon-backend-p263.onrender.com/getService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (res.ok) {
            alert('Form Submitted');
            setFormData({
                dateAndTime: "",
                selectService: ""
            });
        } else {
            alert('Form not Submitted');
        }
    };



    return (
        <>
            <div className={styles.maincontainer} >
                <h1>GetService</h1>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <section className={styles.service} >
                                <label for="Service">Choose a Service:</label>
                                <select className={styles.select} name="selectService" value={formData.selectService} onChange={handleChange}>

                                    {service.map((option) => (
                                        <option key={option.id} value={option.title} className={styles.option}>
                                            {option.title}
                                        </option>
                                    ))}

                                </select>

                            </section>

                            <section name="dateAndTime">
                                <label for="dateAndTime">Choose Date and Time:</label>
                                <input type="datetime-local" name="dateAndTime" value={formData.dateAndTime} onChange={handleChange} />

                            </section>

                            <button className={styles.submit}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetService;