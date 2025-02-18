import React from "react";
import { BiCategory } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";

const Meetingnote = () => {
  return (
    <div className="w-full">
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="flex mb-4 sm:mb-0 gap-3 items-center">
            <BiCategory className="mt-1" size={20} />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Meeting Notes</h1>
          </div>
          <button
            style={{ backgroundColor: "#336DBA" }}
            className="w-full sm:w-auto h-12 sm:h-14 lg:w-[269px] py-2 px-4 flex items-center bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <BiPlus className="mr-2 border-2 rounded" size={20} />
            <span className="text-sm sm:text-base lg:text-lg font-medium">
              Add Note
            </span>
          </button>
        </header>
      </main>
    </div>
  );
};

export default Meetingnote;