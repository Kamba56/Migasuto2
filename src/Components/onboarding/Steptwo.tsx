import logo from "../../assets/images/workLogo.png";
import editlogo from "../../assets/images/editLogo.png";
import upload from "../../assets/images/uploadLogo.png";
export default function Steptwo() {
  // const handleFileChange = () => {};
  // const handleUpload = () => {};
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="" className="max-w-[8em] mb-8" />
      <div className="flex justify-around w-full mb-[9.5em]">
        <label className="flex items-center justify-around min-w-[15em] px-4 py-2 bg-transparent text-[#26203B] text-[0.8em] font-[500] rounded-lg cursor-pointer border-[1px] border-[#465FF166]">
          <img src={upload} alt="" className="w-3" />
          Upload Logo
          <input type="file" className="hidden" />
        </label>

        <label className="flex items-center justify-around min-w-[15em] px-4 py-2 bg-transparent text-[#26203B] text-[0.8em] font-[500] rounded-lg cursor-pointer border-[1px] border-[#465FF166]">
          <img src={editlogo} alt="" className="w-3" />
          Edit Logo
          <input type="file" className="hidden" />
        </label>
      </div>
      <button className="bg-[#465FF1] min-w-[13em] min-h-[3em] rounded-[0.6em] text-[#FFFFFF] font-[500]">
        ontinue
      </button>
    </div>
  );
}
