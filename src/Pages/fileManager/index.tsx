import arrow from "../../assets/images/arrowUp.png";
import filter from "../../assets/images/FilterIcon.png";
import path from "../../assets/images/Path.png";
import { useNavigate } from "react-router";
export default function Filemanager() {
  const dummyData = [
    { id: 1, name: "File A", note: "Note 1", date: "2024-02-24", size: "2MB" },
    { id: 2, name: "File B", note: "Note 2", date: "2024-02-23", size: "1MB" },
    { id: 3, name: "File C", note: "Note 3", date: "2024-02-22", size: "3MB" },
    {
      id: 4,
      name: "File D",
      note: "Note 4",
      date: "2024-02-21",
      size: "1.5MB",
    },
    {
      id: 5,
      name: "File E",
      note: "Note 5",
      date: "2024-02-20",
      size: "2.5MB",
    },
    { id: 6, name: "File F", note: "Note 6", date: "2024-02-19", size: "1MB" },
  ];
  const navigate = useNavigate();

  return (
    <div className="p-[1.75em] text-[16px] min-w-full bg-blue_fade">
      <div className="flex justify-between mb-[1.8em]">
        <form action="" className="flex">
          <button className="text-[1em] mr-[1.43em] text-blue-20">
            Search
          </button>
          <input
            type="text"
            placeholder="Search for files"
            className="min-w-[16em] rounded-[0.5em] border-[#899197] border-[1px] max-h-[2.3em] placeholder:text-[0.87em] placeholder:text-[#899197]"
          />
        </form>

        <button
          onClick={() => navigate("/manager/upload")}
          className="rounded-[0.5em] bg-blue-20 min-w-[18.5em] min-h-[3em] text-left text-[#FEFEFE] text-[0.87em] pl-[0.75em] flex items-center gap-2"
        >
          <img src={arrow} className="w-[1.2em] h-auto" alt="" />
          <span>Upload File</span>
        </button>
      </div>
      <table className="bg-white rounded-[0.6em] min-h-[4em] min-w-[51em] mb-[1em] ">
        <tr className="text-[0.87em] font-semibold text-[#202224]">
          <td className="text-center flex justify-end">
            <img src={filter} alt="" className="h-[4.3em] w-auto" />
          </td>
          <td className="border-x-[0.01em] border-[#979797] text-center">
            <p>Filter by</p>
          </td>
          <td className="border-x-[0.01em] border-[#979797] text-center">
            <select
              id="date"
              name="date"
              className="text-[0.87em] border-0 focus:outline-none focus:ring-0 focus:border-transparent"
            >
              <option value="" disabled selected>
                Date
              </option>
            </select>
          </td>
          <td className="border-l-[0.01em] border-[#979797] text-center">
            <select
              id="type"
              name="type"
              className="text-[0.87em] border-0 focus:outline-none focus:ring-0 focus:border-transparent"
            >
              <option value="" disabled selected>
                Order Type
              </option>
            </select>
          </td>
          <td className="border-x-[0.01em] border-[#979797] text-center">
            <select
              id="status"
              name="status"
              className="text-[0.87em] border-0 focus:outline-none focus:ring-0 focus:border-transparent"
            >
              <option value="" disabled selected>
                Order Status
              </option>
            </select>
          </td>
          <td className="border-l-[0.01em] border-[#979797] text-[#EA0234] pl-[1.6em]">
            <button className="flex gap-2 items-center justify-center">
              <img src={path} alt="" className="h-[0.9em] w-auto" />
              Reset Filter
            </button>
          </td>
        </tr>
      </table>

      <table className="rounded-[0.8em] text-left min-w-[60em] bg-white px-[1.9em] border-collapse overflow-hidden mb-[1.5em]">
        <thead>
          <tr className="border-b border-[#979797]">
            <th className="min-w-[9em] py-[0.9em] pl-[2.5em]">ID</th>
            <th className="min-w-[9em] ">FILE NAME</th>
            <th className="min-w-[9em] ">NOTE</th>
            <th className="min-w-[9em] ">DATE</th>
            <th className="min-w-[9em] ">SIZE</th>
            <th className="min-w-[9em] ">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data) => (
            <tr key={data.id} className="border-b border-[#979797]">
              <td className="p-2 pl-[2.5em] py-[1.75em]">{data.id}</td>
              <td className="p-2 ">{data.name}</td>
              <td className="p-2">{data.note}</td>
              <td className="p-2 ">{data.date}</td>
              <td className="p-2 ">{data.size}</td>
              <td className="p-2 pr-[2.5em]">
                <button className="py-[0.3em] px-[1.5em] text-[0.75em] text-blue-20 bg-blue_fade rounded-[0.5em] font-[500]">
                  Options
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between min-w-[90%]">
        <button className="bg-[#FAFBFD] min-w-[7em] min-h-[2em] rounded-[0.5em] text-[0.87em] text-[#202224]">
          {"< "}Prev.
        </button>
        <button className="bg-[#FAFBFD] min-w-[7em] min-h-[2em] rounded-[0.5em] text-[0.87em] text-[#202224]">
          Next{" >"}
        </button>
      </div>
    </div>
  );
}
