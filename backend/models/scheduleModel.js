const { time } = require('console')
const mongoose=  require('mongoose')

const ScheduleSchema=new mongoose.Schema({
    scheduletitle:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024
    },
    scheduledate:{
        type:Date,
        required:true,
    },
    time_to_start:{
        type:String,
        required:true,
        validate: {
            validator: function(v) {
                return /^([0-1]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/.test(v);  // Regex for 'HH:mm' or 'HH:mm:ss'
            },
            message: props => `${props.value} is not a valid time!`
        }
    },
    time_to_end:{
        type:String,
        required:true,
        validate: {
            validator: function(v) {
                return /^([0-1]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/.test(v);  // Regex for 'HH:mm' or 'HH:mm:ss'
            },
            message: props => `${props.value} is not a valid time!`
        }
    }
},{timestamps:true})  

const schedule=mongoose.model('schedule',ScheduleSchema)
module.exports= schedule