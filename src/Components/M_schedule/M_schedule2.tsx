import React from 'react';
import { BiVideo, BiCircle } from 'react-icons/bi';

const M_schedule2 = () => {
  return (
    <div className="w-[1460px] h-[132px] ml-[25px] bg-[#4880FF] rounded-[20px] flex items-center justify-between p-4">
      <div className="flex-1 flex items-center gap-2">
        <div className="mr-[50px]">
          <div className="flex items-center justify-center w-[61px] h-[61px] rounded-full bg-[white]">
            <BiVideo className="text-blue-600" size={22} />
          </div>
        </div>
        <div className="flex gap-[150px] justify-between items-start">
          <div className="flex flex-col mr-[80px] gap-[3px]">
            <div className="w-[200px] h-[25px]">
              <h1 className="text-[white] font-[600] text-[16px]">
                Meeting with CEO
              </h1>
            </div>
            <div className="flex justify-center w-[400px] h-[36px]">
              <p className="text-[15px] font-[400] text-[white]">
                Please endeavor to complete all the sections that are relevant
                to you
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[3px] ml-[280px]">
            <h1 className="text-[white] font-[600] mb-[8px] text-[16px]">
              Thursday 25th April, 2024
            </h1>
            <p className="text-[16px] text-[white] font-[500]">
              9:00 AM - 10:00 AM
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-[38px] h-[38px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <circle cx="19" cy="19" r="19" fill="#2FCF97"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.0001 1.7915C5.9225 1.7915 1.79175 5.92225 1.79175 10.9998C1.79175 16.0774 5.9225 20.2082 11.0001 20.2082C16.0777 20.2082 20.2084 16.0774 20.2084 10.9998C20.2084 5.92225 16.0777 1.7915 11.0001 1.7915ZM11.0001 21.8332C5.02658 21.8332 0.166748 16.9733 0.166748 10.9998C0.166748 5.02634 5.02658 0.166504 11.0001 0.166504C16.9736 0.166504 21.8334 5.02634 21.8334 10.9998C21.8334 16.9733 16.9736 21.8332 11.0001 21.8332Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M11 14.0263C10.7844 14.0263 10.5764 13.9408 10.4247 13.7869L6.66447 10.0104C6.34706 9.69192 6.34922 9.17734 6.66664 8.861C6.98514 8.54467 7.49972 8.54467 7.81606 8.86317L11 12.0633L14.185 8.86317C14.5013 8.54467 15.0159 8.54467 15.3344 8.861C15.6518 9.17734 15.6529 9.69192 15.3366 10.0104L11.5752 13.7869C11.4236 13.9408 11.2156 14.0263 11 14.0263Z" fill="white"/>
          </svg>
        </div>
        <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#000] text-white relative">
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 1.7915C5.92238 1.7915 1.79163 5.92225 1.79163 10.9998C1.79163 16.0774 5.92238 20.2082 11 20.2082C16.0775 20.2082 20.2083 16.0774 20.2083 10.9998C20.2083 5.92225 16.0775 1.7915 11 1.7915M11 21.8332C5.02646 21.8332 0.166626 16.9733 0.166626 10.9998C0.166626 5.02634 5.02646 0.166504 11 0.166504C16.9735 0.166504 21.8333 5.02634 21.8333 10.9998C21.8333 16.9733 16.9735 21.8332 11 21.8332"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.2772 12.0978C14.6781 12.0978 14.1885 11.6136 14.1885 11.0145C14.1885 10.4154 14.6684 9.93115 15.2664 9.93115H15.2772C15.8763 9.93115 16.3606 10.4154 16.3606 11.0145C16.3606 11.6136 15.8763 12.0978 15.2772 12.0978"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9334 12.0978C10.3343 12.0978 9.8457 11.6136 9.8457 11.0145C9.8457 10.4154 10.3245 9.93115 10.9236 9.93115H10.9334C11.5325 9.93115 12.0167 10.4154 12.0167 11.0145C12.0167 11.6136 11.5325 12.0978 10.9334 12.0978"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.59046 12.0978C5.99138 12.0978 5.50171 11.6136 5.50171 11.0145C5.50171 10.4154 5.98163 9.93115 6.58071 9.93115H6.59046C7.18954 9.93115 7.67379 10.4154 7.67379 11.0145C7.67379 11.6136 7.18954 12.0978 6.59046 12.0978"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M_schedule2;