import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
const app=express();

// mongoDb connection 
mongoose.connect(process.env.MONGODB).then(()=>{
  console.log("MongoDb Connected..")
}).catch(e => console.log(e))




// App listenning on port 3000
  app.listen(3000, ()=>{
    console.log('Server is running...!!!')
  })