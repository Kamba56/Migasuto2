import logo from "../../assets/images/workLogo.png";
import editlogo from "../../assets/images/editLogo.png";
import upload from "../../assets/images/uploadLogo.png";
import { useSignup } from "./SignupContext";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Steptwo() {
  const navigate = useNavigate();
  const endpoint = "https://migasutoapi-production.up.railway.app/auth/signup";
  const { signupData, setSignupData, resetSignupData } = useSignup();
  const [logoPreview, setPreview] = useState("");
  const handleSubmit = async () => {
    const data = signupData;
    try {
      const response = await axios.post(endpoint, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      resetSignupData();
      navigate("/onboarding/3");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const handleFile = (file: File | undefined) => {
    if (!file) {
      alert("Please select a logo file");
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size should be less than 5MB");
      return;
    }

    // Create a preview URL
    const previewUrl = URL.createObjectURL(file);

    setPreview(previewUrl);
  };

  // const handleFileChange = () => {};
  // const handleUpload = () => {};
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full max-w-[8em] h-[8em] mb-8 overflow-hidden">
        <img
          src={logoPreview || logo}
          alt=""
          className="max-w-[8em] object-center"
        />
      </div>

      <div className="flex justify-around w-full mb-[9.5em] px-8">
        <label className="flex items-center justify-around min-w-[12em] px-4 py-2 bg-transparent text-[#26203B] text-[1.2em] font-[500] rounded-lg cursor-pointer border-[1px] border-[#465FF166]">
          <img src={upload} alt="" className="w-3" />
          Upload Logo
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                handleFileChange(e);
                setSignupData({ logo: e.target.files[0] });
              }
            }}
          />
        </label>

        <label className="flex items-center justify-around min-w-[12em] px-4 py-2 bg-transparent text-[#26203B] text-[1.2em] font-[500] rounded-lg cursor-pointer border-[1px] border-[#465FF166]">
          <img src={editlogo} alt="" className="w-3" />
          Edit Logo
          <input type="file" className="hidden" />
        </label>
      </div>
      <button
        className="bg-[#465FF1] min-w-[13em] min-h-[3em] rounded-[0.6em] text-[#FFFFFF] font-[500]"
        onClick={handleSubmit}
      >
        Continue
      </button>
    </div>
  );
}
