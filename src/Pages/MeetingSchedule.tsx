import React from 'react'
import M_schedule from '../Components/M_schedule/M_schedule'
import { Link } from 'react-router-dom'
import M_schedule2 from '../Components/M_schedule/M_schedule2'
import M_schedule3 from '../Components/M_schedule/M_schedule3'

const MeetingSchedule = () => {
  return (
    <div className='bg-[#ECF0FF] pb-10'>
    <Link to={"/m_schedule"}>
        <M_schedule />
        <M_schedule2 />
        <M_schedule3 />
    </Link> 
    </div>
  )
}

export default MeetingSchedule
