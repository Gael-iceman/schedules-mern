import React, { useState } from 'react'
import { useSchedulesContext } from '../hooks/useSchedulesContext'

function ScheduleForm() {
    const {dispatch}=useSchedulesContext()
    const [scheduletitle,setscheduletitle]=useState('')
    const [scheduledate,setscheduledate]=useState('')
    const [time_to_start,settime_to_start]=useState('')
    const [time_to_end,settime_to_end]=useState('')
    const [Error,setError]=useState(null)

    const handleSubmit=async(e)=>{
        e.preventDefault()

        const schedule={scheduletitle,scheduledate,time_to_start,time_to_end}
        const response= await fetch('http://localhost:9090/api/schedules',{
            method:'POST',
            body:JSON.stringify(schedule),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setscheduletitle('')
            setscheduledate('')
            settime_to_start('')
            settime_to_end('')
            setError(null)
           console.log('new schedule added',json)
           dispatch({type:'CREATE_SCHEDULE',payload:json})
        }
    }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a new Schedule</h3>

        <label>Schedule Title:</label>
        <input
         type="text"
         onChange={(e)=> setscheduletitle(e.target.value)}
         value={scheduletitle}
          />

        <label>Schedule Date:</label>
        <input
         type="date"
         onChange={(e)=> setscheduledate(e.target.value)}
         value={scheduledate}
          />

        <label>Time to start:</label>
        <input
         type="time"
         onChange={(e)=> settime_to_start(e.target.value)}
         value={time_to_start}
          />

        <label>Time to end:</label>
        <input
         type="time"
         onChange={(e)=> settime_to_end(e.target.value)}
         value={time_to_end}
          />
          <button>Add Schedule</button>
          {Error && <div className='error'>{Error}</div>}

    </form>
  )
}

export default ScheduleForm