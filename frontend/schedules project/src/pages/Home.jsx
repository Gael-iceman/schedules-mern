import React from 'react'
import{useEffect,useState} from 'react'
import ScheduleDetails from '../components/scheduleDetails'
import ScheduleForm from '../components/ScheduleForm'

function Home() {
    const [schedules,setSchedules]= useState(null)
    useEffect(()=>{
        const fetchSchedules= async ()=>{
            const response= await fetch('http://localhost:9090/api/schedules')
            const json=await response.json()
            if(response.ok){
              setSchedules(json)
            }
        }
        fetchSchedules()
    },[])
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