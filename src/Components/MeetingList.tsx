import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BiVideo } from "react-icons/bi";
import { meetings } from "../../utils/meetinglist";

interface Props {
  onMeetingClick: (id: number) => void;
}

const MeetingList: React.FC<Props> = ({ onMeetingClick }) => {
  const [activeMeetingId, setActiveMeetingId] = useState<number | null>(null);

  const handleMeetingClick = (id: number) => {
    setActiveMeetingId(id);
    onMeetingClick(id);
  };

  return (
    <div className="max-w-sm w-full pt-5 sm:pt-6 lg:pt-[20px] h-full bg-white rounded-2xl sm:rounded-3xl lg:rounded-[30px]">
      <h2 className="text-lg sm:text-xl lg:text-[16px] ml-5 text-[var(--Dark-90, #141619)] font-bold mb-4">
        Notes
      </h2>
      <div className="flex justify-between gap-3 mx-2 sm:mx-4 lg:mx-[10px] items-center mt-4 mb-4 bg-[#E9ECF1] px-4 sm:px-6 lg:px-[35px] py-3 sm:py-4 lg:py-[17px] rounded-lg sm:rounded-xl lg:rounded-[15px] shadow-md">
        <BiSearch className="text-gray-400" size={24} />
        <input
          type="text"
          placeholder="Hauwa Abdullahi Sani"
          className="flex-1 items-center justify-center text-sm sm:text-base lg:text-[12px] bg-transparent outline-none border-none border-gray-300"
        />
      </div>
      <div className="p-4 cursor-pointer">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className={`flex items-center p-4 mb-4 rounded-lg sm:rounded-xl lg:rounded-[20px] shadow-md ${
              meeting.id === activeMeetingId ? "bg-[#4880FF]" : "bg-[#ECF0FF]"
            }`}
            onClick={() => handleMeetingClick(meeting.id)}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 ${
                meeting.id === activeMeetingId ? "bg-white text-[#4880FF]" : "bg-[#4880FF] text-white"
              }`}
            >
              <BiVideo
                className={`${
                  meeting.id === activeMeetingId ? "text-[#4880FF]" : "text-white"
                }`}
                size={24}
              />
            </div>
            <div>
              <h3 className={`font-semibold text-sm sm:text-base lg:text-[12px] ${meeting.id === activeMeetingId ? "text-white" : "text-black"}`}>
                {meeting.title}
              </h3>
              <p className={`text-xs sm:text-sm lg:text-[10px] ${meeting.id === activeMeetingId ? "text-white" : "text-[#336DBA]"}`}>
                {meeting.date}
              </p>
              <p className={`text-xs sm:text-sm lg:text-[10px] ${meeting.id === activeMeetingId ? "text-white" : "text-black"}`}>
                {meeting.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingList;