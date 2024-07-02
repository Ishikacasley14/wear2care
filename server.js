import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));

// rest api
app.get('/',(req,res) =>{
    res.send({
        message:'Welcome to wear2care'
    })
})
// PORT
const PORT = process.env.PORT;

//run listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white)
})