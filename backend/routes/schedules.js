const express=require('express')
const router= express.Router()
const {
    createschedule,
    getallschedules,
    getschedule,
    deleteschedule,
    updateschedule
}= require('../controllers/schedulecontroller')

router.get('/',getallschedules)

router.get('/:id',getschedule)

router.post('/',createschedule)

router.delete('/:id',deleteschedule)

router.patch('/:id',updateschedule) 

module.exports= router