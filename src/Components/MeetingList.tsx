import React from "react";
import { BiSearch } from "react-icons/bi";
import { BiVideo } from "react-icons/bi";
import { meetings } from "../../utils";

interface Props {
  onMeetingClick: (id: number) => void;
}

const MeetingList: React.FC<Props> = ({ onMeetingClick }) => {
  return (
    <div className="max-w-sm w-full pt-[20px]  h-full  bg-white rounded-[30px]  ">
      <h2 className="text-[16px] ml-5  text-[var(--Dark-90, #141619)] font-bold mb-4">
        Notes
      </h2>
      <div className="flex justify-between gap-3 mx-[10px]  items-center mt-4 mb-4 bg-[#E9ECF1] px-[35px] py-[17px] rounded-[15px] shadow-md">
        <BiSearch className="text-gray-400" size={24} />
        <input
          type="text"
          placeholder="Hauwa Abdullahi Sani"
          className="flex-1 items-center justify-center text-[12px] bg-transparent outline-none border-none border-gray-300 "
        />
      </div>
      <div className="p-4 cursor-pointer">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className={`flex items-center p-4 mb-4  rounded-[20px] shadow-md ${
              meeting.id === 1
                ? "bg-blue-600 text-white"
                : "bg-blue-600/30 text-black"
            }`}
            onClick={() => onMeetingClick(meeting.id)}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 ${
                meeting.id === 1
                  ? "bg-white text-blue-600"
                  : "bg-blue-600 text-white"
              }`}
            >
              <BiVideo
                className={`${
                  meeting.id === 1 ? "text-blue-600" : "text-white"
                }`}
                size={24}
              />
            </div>
            <div>
              <h3
                className={`font-semibold text-[12px] ${
                  meeting.id === 1 ? "text-white" : "text-black"
                }`}
              >
                {meeting.title}
              </h3>
              <p
                className={`text-[10px] ${
                  meeting.id === 1 ? "text-white" : "text-blue-600"
                }`}
              >
                {meeting.date}
              </p>
              <p
                className={`text-[10px] ${
                  meeting.id === 1 ? "text-white" : "text-gray-600"
                }`}
              >
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
