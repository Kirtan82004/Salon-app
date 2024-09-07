import React, { useState } from "react";
import styles from "./contactform.module.css";

function ContactForm(){
    const [formData,setFormDtata]= useState({
        name: '',
        email: '',
        number:'',
        message: ''

    });
const handleChange =(e)=>{
    const {name,value}=e.target;
    setFormDtata({
        ...formData,
        [name]:value
    })

}
const handleSubmit = async (e)=>{
    e.preventDefault();
    const res = await fetch('http://localhost:3000/contact',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
    });
    if(res.ok){
        alert('Form Submitted')
        setFormDtata({
            name: '',
            email: '',
            number: '',
            message: ''

        })
    }else{
        alert('Form not Submitted')
    }
}

    return (
        <>
        <div className={styles.mainContainer}>
        <div className={styles.container}>
        <h2>Contact Us</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label  htmlFor="name">Name:</label>
                <input type="text" placeholder="enter you name" id="name" name="name" value={formData.name} required onChange={handleChange}/>
                <label  htmlFor="phone">Phone:</label>
                <input   type="tel" placeholder="enter you phone no." id="phone" name="number" value={formData.number} required onChange={handleChange}/>
                <label htmlFor="email">Email:</label>
                <input  type="email" placeholder="enter you email" id="email" name="email" value={formData.email}  required onChange={handleChange}/>
                <label htmlFor="message">Message:</label>
                <textarea  className={styles.message}  id="message" placeholder="enter you message" name="message" value={formData.message} required onChange={handleChange}/>
                <button className={styles.button} type="submit">Send</button>
            </form>
        </div>
        <div className={styles.image}></div>
        </div>
        </>
    )
}

export default ContactForm;