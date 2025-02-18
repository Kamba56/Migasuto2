import { BiCategory } from "react-icons/bi";
import Info from "../../assets/icons/Info.svg";


const M_schedule = () => {
  return (
    <div className="w-full">
      <main className="flex-1 sm:p-6 ">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="flex mb-[20px] sm:mb-0 gap-3 items-center">
            <BiCategory className="mt-5px" size={20} />
            <h1 className="text-2xl text-[24px] font-[600]">
              Meeting Schedule -M938883a
            </h1>
          </div>
          <div className="relative flex items-center  w-full sm:w-auto">

             <div className='bg-[#0d6edd1a] ml-[80px] w-fit lg:w-auto rounded-lg flex items-center p-1 py-2 md:p-3 cursor-pointer'>
                        <img src={Info} />
                        <p className='md:ml-2 mr-2 md:mr-20 text-xs'>Please verify your email address</p>
                        
                    </div>
            <svg
              className="absolute right-3 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.41083 4.41058C4.73626 4.08514 5.2639 4.08514 5.58934 4.41058L10.0001 8.82133L14.4108 4.41058C14.7363 4.08515 15.2639 4.08515 15.5893 4.41058C15.9148 4.73602 15.9148 5.26366 15.5893 5.58909L11.1786 9.99984L15.5893 14.4106C15.9148 14.736 15.9148 15.2637 15.5893 15.5891C15.2639 15.9145 14.7363 15.9145 14.4108 15.5891L10.0001 11.1783L5.58934 15.5891C5.2639 15.9145 4.73626 15.9145 4.41083 15.5891C4.08539 15.2637 4.08539 14.736 4.41083 14.4106L8.82157 9.99984L4.41083 5.58909C4.08539 5.26366 4.08539 4.73602 4.41083 4.41058Z"
                fill="#084298"
              />
            </svg>
          </div>
        </header>
      </main>
    </div>
  );
};

export default M_schedule;