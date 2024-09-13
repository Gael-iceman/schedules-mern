const express= require('express') 
require('dotenv').config()
const app = express()
const cors = require('cors');
const mongoose= require('mongoose')
const scheduleRoutes= require('./routes/schedules')
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    const PORT= process.env.PORT
    app.listen(PORT,()=>{
        console.log(`connected to db & listening on port ${PORT}`)
    })
    
})
.catch((error)=>console.log(error))

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
})

app.use(cors({
    origin: 'http://localhost:5173'
  }));

app.use('/api/schedules',scheduleRoutes)