import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'



dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('DB connected!');
}).catch((err) => {
    console.log(err);
})



app.listen(3000,() => {
    console.log('Server is running at port 3000!!')
})

//testing
// app.get('/test' ,((req,res) => {
//     res.send('Hello Worlds!')
// }))


app.use('/api/user' ,userRouter);