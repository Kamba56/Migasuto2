import React, { useState} from 'react'
import Meetingnote from '../Components/Meetingnote'
import MeetingList from '../Components/MeetingList'
import MeetingDetails from '../Components/MeetingDetails'

const ALLmeeting: React.FC = () => {
  const [selectedMeetingId, setSelectedMeetingId] = useState<number | null>(null);
  return (
<<<<<<< HEAD
  <Link to={"/ALLmeeting"}>
    <div className='w-[100%] bg-blue-600/20'>
=======
  
    <div className='w-[100%] bg-transparent'>
>>>>>>> 48979b422e03693f5529f759fa31c9a935b254a2
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
