const mongoose=require('mongoose')
const scheduleModel=require('../models/scheduleModel')

const getallschedules=async (req,res)=>{
const schedules=await scheduleModel.find({}).sort({createdAt:-1});
res.json(schedules).status(200)
}

const getschedule=async (req,res)=>{
    const {id}= req.params 

    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.json('No Schedule With Such ID').status(404)
    }

    const schedule=await scheduleModel.findById(id)

    if(!schedule){
       return res.json({error:'no such schedule'}).status(404)
    }
    res.json(schedule).status(200)
}

const createschedule=async (req,res)=>{
    const {scheduletitle, scheduledate,time_to_start,time_to_end}=req.body

    try{
        const schedule = await scheduleModel.create({scheduletitle, scheduledate,time_to_start,time_to_end})
        res.status(200).json(schedule)
    } catch(error){
        res.status(400).json({error:error.message})
    }
}

const deleteschedule= async(req,res)=>{
    const {id}= req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json('No Schedule With Such ID').status(404)
     }
     const schedule=await scheduleModel.findByIdAndDelete(id)

     if(!schedule){
        return res.json({error:'no such schedule'}).status(400)
     }
    return res.json(`deleted scheule is: ${schedule}`).status(200)
}

const updateschedule=async (req,res)=>{
    const {id}= req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json('No Schedule With Such ID').status(404)
     }
     const schedule=await scheduleModel.findByIdAndUpdate((id),{
        ...req.body
     })

     if(!schedule){
        return res.json({error:'no such schedule'}).status(400)
     }
     res.json(`schedule updated is: ${schedule}`).status(200)
}

module.exports={
    createschedule,
    getallschedules,
    getschedule,
    deleteschedule,
    updateschedule
}