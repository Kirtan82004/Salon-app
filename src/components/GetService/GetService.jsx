import React,{useState} from "react";
import styles from "./GetService.module.css";
import service from "../../Data/services.json"

function GetService() {
const [formData,setFormDtata]=useState({
    serviceName
})
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <div className={styles.maincontainer} >
                <h1>GetService</h1>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <section className={styles.service}>
                                <label for="Service">Choose a Service:</label>
                                <select className={styles.select}>
                                    {service.map((option) => (
                                        <option key={service.id} value={option.title} className={styles.option}>
                                            {option.title}
                                        </option>
                                    ))}

                                </select>

                            </section>

                            <section name="dateAndTime">
                                <label for="dateAndTime">Choose Date and Time:</label>
                                <input type="datetime-local" />

                            </section>

                            <button type="submit" className={styles.submit}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetService;