import { BiPlus } from "react-icons/bi";

const Meetingnote = () => {
  return (
    <div className="w-full">
      <main className="flex-1">
        <header className="flex flex-col sm:flex-row justify-end  items-center mb-6">
          <button
            style={{ backgroundColor: "#336DBA" }}
            className="w-[269px] max-h-[730px] h-[49px] py-2 px-4 flex  items-center bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <BiPlus className="mr-2  border-2 rounded" size={20} />
            <span className="text-[#FEFEFE] ml-0 text-[14px]  sm:text-base font-medium">
              Add Note
            </span>
          </button>
        </header>
      </main>
    </div>
  );
};

export default Meetingnote;
