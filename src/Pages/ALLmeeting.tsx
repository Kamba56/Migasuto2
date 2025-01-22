import React, { useState } from "react";
import Meetingnote from "../Components/Meetingnote";
import MeetingList from "../Components/MeetingList";
import MeetingDetails from "../Components/MeetingDetails";

const ALLmeeting: React.FC = () => {
  const [selectedMeetingId, setSelectedMeetingId] = useState<number | null>(
    null
  );
  return (
    <div className="w-[100%]">
      <Meetingnote />
      <div className="flex   h-full">
        <div className="w-[25%] ml-3 rounded-lg ">
          <MeetingList onMeetingClick={setSelectedMeetingId} />
        </div>
        <div className="w-[810%] ml-2 rounded-lg ">
          {selectedMeetingId && (
            <MeetingDetails meetingId={selectedMeetingId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ALLmeeting;
