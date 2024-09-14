import React from 'react'
import { useSchedulesContext } from '../hooks/useSchedulesContext'

function ScheduleDetails({schedule}) {

  const handleClick=async ({schedule})=>{
    const response= await fetch('http://localhost:9090/api/schedules' +schedule._id,{
      method:'DELETE'
    })
    const json= await response.json()

    if(response.ok){
      
    }
  }
  return (
    <div className='schedule-details'>
        <h4>{schedule.scheduletitle}</h4>
        <p><strong>Schedule Date:</strong>{schedule.scheduledate}</p>
        <p><strong>Time to start:</strong>{schedule.time_to_start}</p>
        <p><strong>Time to end:</strong>{schedule.time_to_end}</p>
        <p>{schedule.createdAt}</p>
        <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default ScheduleDetails