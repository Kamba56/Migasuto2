import React from "react";
import { BiVideo } from "react-icons/bi";
import { BiCircle } from "react-icons/bi";
import { meetings } from "../../utils/meetingdetails";

type MeetingDetailsProps = {
  meetingId: number | null;
};



const MeetingDetails: React.FC<MeetingDetailsProps> = ({ meetingId }) => {
  const meeting = meetings.find((m) => m.id === meetingId);

  if (!meeting) {
    return (
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-500">Select a meeting to view details.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full h-full bg-white p-6 rounded-[30px] shadow-md">
      <div className="flex w-full items-center justify-between">
        <div className="flex-1 flex items-center gap-2">
          <div>
            <div
              className={`flex items-center justify-center w-[61px] h-[61px] rounded-full mr-4 ${"bg-blue-600 text-white"}`}
            >
              <BiVideo className="text-white" size={22} />
            </div>
          </div>
          <div className="flex gap-[150px] justify-between items-start">
            <div className="flex flex-col gap-[3px]">
              <div className="w-[200px] h-[25px]">
                <h1 className="text-[#2E2E2E] font-[600] text-[16px]">
                  Meeting with CEO
                </h1>
              </div>
              <div className="flex justify-center w-[269px] h-[36px]">
                <p className="text-[13px] font-[400]">
                  Please endeavor to complete all the sections that are relevant
                  to you
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-[20px]">
              <div className="flex flex-col gap-[3px] ml-[-50px]">
                <h1 className="text-[#336DBA] font-[600] mb-[8px] text-[15px]">
                  Thursday 25th April, 2024
                </h1>
                <p className="text-[15px] text-[#2E2E2E] font-[500]">
                  9:00 AM - 10:00 AM
                </p>
              </div>
              <div className="flex items-center mb-3 ml-10 justify-center  w-[38px] h-[38px] rounded-full bg-[#000] text-white">
                <BiCircle className="text-white" size={26} />
                <div className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 1.7915C5.92238 1.7915 1.79163 5.92225 1.79163 10.9998C1.79163 16.0774 5.92238 20.2082 11 20.2082C16.0775 20.2082 20.2083 16.0774 20.2083 10.9998C20.2083 5.92225 16.0775 1.7915 11 1.7915M11 21.8332C5.02646 21.8332 0.166626 16.9733 0.166626 10.9998C0.166626 5.02634 5.02646 0.166504 11 0.166504C16.9735 0.166504 21.8333 5.02634 21.8333 10.9998C21.8333 16.9733 16.9735 21.8332 11 21.8332"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.2772 12.0978C14.6781 12.0978 14.1885 11.6136 14.1885 11.0145C14.1885 10.4154 14.6684 9.93115 15.2664 9.93115H15.2772C15.8763 9.93115 16.3606 10.4154 16.3606 11.0145C16.3606 11.6136 15.8763 12.0978 15.2772 12.0978"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.9334 12.0978C10.3343 12.0978 9.8457 11.6136 9.8457 11.0145C9.8457 10.4154 10.3245 9.93115 10.9236 9.93115H10.9334C11.5325 9.93115 12.0167 10.4154 12.0167 11.0145C12.0167 11.6136 11.5325 12.0978 10.9334 12.0978"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.59046 12.0978C5.99138 12.0978 5.50171 11.6136 5.50171 11.0145C5.50171 10.4154 5.98163 9.93115 6.58071 9.93115H6.59046C7.18954 9.93115 7.67379 10.4154 7.67379 11.0145C7.67379 11.6136 7.18954 12.0978 6.59046 12.0978"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-[2px] mt-[20px] mx-[20px] text-[#D9D9D9]" />
      <div className="text-[14x] leading-normal font-[400] pl-[5%] mt-[20px] text-[#4D5154]">
        <h2 className=" mb-2">{meeting.heading}</h2>
        <h2 className="mb-2">{meeting.title}</h2>
        <p className="mb-2 ">{meeting.date}</p>
        <p className="mb-2">{meeting.time}</p>

        <h3 className="mb-2">Attendees:</h3>
        <ul className="ml-[10px] list-disc list-inside mb-4">
          {meeting.Attendees.map((attendee, index) => (
            <li key={index}>{attendee}</li>
          ))}
        </ul>

        <h3 className=" mb-2">Agenda:</h3>
        <ul className="ml-[10px] list-decimal list-inside mb-4 ">
          {meeting.agenda.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="mb-2">Meeting Notes:</h3>
        <ul className="ml-[10px] list-disc list-inside mb-4">
          {meeting.notes.map((note, index) => (
            <li key={index}>
              <span>{note.section}:</span>
              <ul className="ml-[20px] list-disc list-inside">
                {note.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <h3 className="mb-2">Next Steps:</h3>
        <ul className="ml-[10px] list-disc list-inside">
          {meeting.nextSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <p className="mt-4">
          Note: These are just sample notes. You can customize them to fit the
          specific needs of your meeting. Be sure to include all relevant
          information, such as decisions made, action items, and follow-up
          tasks.
        </p>
      </div>
    </div>
  );
};

export default MeetingDetails;
