import React, { useState} from 'react'
import Meetingnote from '../Components/Meetingnote'
import MeetingList from '../Components/MeetingList'
import MeetingDetails from '../Components/MeetingDetails'
import { Link } from 'react-router-dom'

const ALLmeeting: React.FC = () => {
  const [selectedMeetingId, setSelectedMeetingId] = useState<number | null>(null);
  return (
  <Link to={"/ALLmeeting"}>
    <div className='w-[100%] bg-blue-600/20'>
      <Meetingnote />
      <div className="flex   h-full">
        <div className="w-[25%] ml-3 rounded-lg ">
          <MeetingList onMeetingClick={setSelectedMeetingId} />
        </div>
        <div className="w-[810%] ml-2 rounded-lg "> 
          {selectedMeetingId && <MeetingDetails meetingId={selectedMeetingId} />}
        </div>
      </div>
    </div>
  </Link>

 
  )
}

export default ALLmeeting
