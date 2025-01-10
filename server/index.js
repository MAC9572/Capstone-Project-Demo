const express = require("express")
const app = express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require("dotenv").config();



const { default: mongoose } = require("mongoose");

const cors = require("cors")

app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:5173','http://localhost:5174',]; // Add more origins as needed
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, // Allow credentials
    })
);


const authRoutes = require('./Routes/Auth')
const adminRoutes = require('./Routes/Admin')
const movieRoutes = require('./Routes/Movie')
const imageuploadRoutes = require('./Routes/imageUploadRouter')


mongoose.connect (process.env.connect_str)
.then(()=>{
    console.log("Data base is connected")
    app.listen(process.env.PORT,()=>{
        console.log(`Hello Dashboard Listing to the port ${process.env.PORT}`)
    })
})
.catch((error)=>{
console.log(`error in correction db : ${error}`)
})
app.use(cookieParser());

app.use(express.json())
app.use('/auth',authRoutes)
app.use('/admin',adminRoutes)
app.use('/movie',movieRoutes)
app.use('/image',imageuploadRoutes)




