import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config();
const app=express();

// mongoDb connection 
mongoose.connect(process.env.MONGODB).then(()=>{
  console.log("MongoDb Connected..")
}).catch(e => console.log(e))

app.use('/api/user',userRouter)


// App listenning on port 3000
  app.listen(3000, ()=>{
    console.log('Server is running...!!!')
  })