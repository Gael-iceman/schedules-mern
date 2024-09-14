import React from 'react'
import{useEffect,useState} from 'react'
import ScheduleDetails from '../components/scheduleDetails'
import ScheduleForm from '../components/ScheduleForm'
import { useSchedulesContext } from '../hooks/useSchedulesContext'

function Home() {
 const {schedules,dispatch} = useSchedulesContext()

    useEffect(()=>{
        const fetchSchedules= async ()=>{
            const response= await fetch('http://localhost:9090/api/schedules')
            const json=await response.json()
            if(response.ok){
              dispatch({type:'SET_SCHEDULES',payload:json})
            }
        }
        fetchSchedules()
    },[dispatch])
  return (
    <>
        <div className='home'>
          <div className='schedules'>
            {schedules && schedules.map((schedule)=>(
              <ScheduleDetails key={schedule._id} schedule={schedule}/>
            ))}
          </div>
          <ScheduleForm></ScheduleForm>
        </div>
    </>
  )
}

export default Home