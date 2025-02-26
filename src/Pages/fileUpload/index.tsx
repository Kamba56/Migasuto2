import cloud from "../../assets/images/cloudicon.png";
import back from "../../assets/images/back.png";
import bPlus from "../../assets/images/bluePlus.png";
import wPlus from "../../assets/images/whitePlus.png";
import { Link } from "react-router";
import Dropzone from "react-dropzone";

export default function FileUpload() {
  return (
    <div className="min-w-[67em] min-h-[46em] rounded-[1.87em] bg-white p-[1.75em]">
      <Link to={"/manager"} className="inline-block">
        <div className="flex items-center ">
          <img src={back} alt="" className="w-[1.5em] h-[1em] object-cover" />
          <span className="text-[1.12em] font-semibold ml-[1.25em]"> Back</span>
        </div>
      </Link>

      <div className="flex">
        <div>
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  {...getRootProps({
                    className:
                      "mb-[2.37em] min-w-[27.81em] bg-[#F8F8FF] min-h-[26.68em] border-dotted border-[1px] border-[#384EB74D] rounded-[0.25em] flex flex-col justify-center items-center",
                  })}
                >
                  <input {...getInputProps()} />
                  <img
                    src={cloud}
                    alt=""
                    className="w-[4.25em] h-auto mb-[1.25em]"
                  />
                  <p className="mb-[0.31em] text-[1em] font-semibold">
                    Drag & drop files or{" "}
                    <Link to={""} className="underline text-[#483EA8]">
                      Browse
                    </Link>
                  </p>
                  <p className="text-[0.75em]">
                    Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
                    PPT
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
          <button className="min-w-[27em] min-h-[3em] flex rounded-[0.5em] bg-blue-20 p-[0.75em] text-white text-left">
            <img src={wPlus} alt="" className="w-[1.25em] h-auto mr-2" />
            Upload File
          </button>
        </div>
        <div className="ml-[3.68em]">
          <form action="" className="flex flex-col items-end">
            <label className="self-start font-semibold">Note</label>
            <textarea
              name="note"
              id="note"
              required
              className="min-h-[10.5rem] mb-[1.43em] min-w-[23.75rem] border-[1px] rounded-[0.5em] text-[1em] placeholder:text-[1em]"
              placeholder="Enter your response"
            ></textarea>
            <button className="min-w-[18.5em] text-left flex text-[0.87em] rounded-[0.5em] border-[1px] border-blue-20 text-blue-20 font-[500] bg-white p-[0.75em]">
              <img src={bPlus} alt="" className="w-[1.25em] h-auto mr-2" />
              Request A Meeting on File
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
