// importing required dependencies
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import listingRouter from './routes/listing.route.js'
dotenv.config();
const app=express();
app.use(express.json())
app.use(cookieParser());

// mongoDb connection 
mongoose.connect(process.env.MONGODB).then(()=>{
  console.log("MongoDb Connected..")
}).catch(e => console.log(e))


// Routes
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/listing',listingRouter)

// middleware
app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500; //internal server error :500
  const message= err.message || 'Internal server error';
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  });
});

// App listening on port 3000
  app.listen(3000, ()=>{
    console.log('Server is running...!!!');
  });