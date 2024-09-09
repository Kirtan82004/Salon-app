import bodyParser from "body-parser";
import nodemailer from "nodemailer"
import cors from "cors"
import express from "express"
import dotenv from 'dotenv'

dotenv.config();

const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential:true
}));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})
app.get("/home",(req,res)=>{
    res.send("Hello World")
})
app.post("/contact",(req,res)=>{

    const {name,email,number,message} = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'aryannegi192@gmail.com',//'krishna6310136575@gmail.com',
        subject: 'New Message from Contact Form',
        text: `Name: ${name} \n Email: ${email} \n Number:${number} \n Message:${message}`,
        
    }
    
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.status(500).send("Failed to send email");
        }else{
            console.log("Email sent: "+info.response);
            res.status(200).send('Message received')
        }
    });

});



const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`)
});
