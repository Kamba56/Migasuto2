import FormInput from "../../Components/base-components/Form/FormInput/index";
import { FormLabel } from "../../Components/base-components/Form";
import { useState } from "react";
export default function Settings2() {
  const [isPasswordActive, setIsPasswordActive] = useState(true);
  const [isProfileActive, setIsProfileActive] = useState(false);
  return (
    <div className="min-h-full rounded-[30px] bg-white text-[12px] md:text-[16px]  pt-[4.5em] px-[5em]">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div>
          <h1 className="text-[2em] font-[600] leading-8">Change Password</h1>
          <p className="text-[0.8em] font-[400] mb-[0.22em] md:mb-0">
            Add a password to make your account more secure
          </p>
        </div>
        <div className="flex bg-[#ECF0FF] min-w-[22em] min-h-[3em] text-[1em] justify-around rounded-[0.5em]">
          <button
            className={`${
              isProfileActive ? "bg-[#336DBA] text-white " : "text-[#9C9AA5] "
            } rounded-[0.5em] min-w-[50%]`}
            onClick={() => {
              setIsProfileActive(true);
              setIsPasswordActive(false);
            }}
          >
            Profile
          </button>
          <button
            className={`${
              isPasswordActive ? "bg-[#465FF1] text-white " : "text-[#9C9AA5] "
            } rounded-[0.5em] min-w-[50%]`}
            onClick={() => {
              setIsProfileActive(false);
              setIsPasswordActive(true);
            }}
          >
            Password
          </button>
        </div>
      </div>
      <div className="mt-[4.62em]  flex justify-center">
        <form action="" className="max-w-[23em]">
          <FormLabel className="font-[500]">Enter Password</FormLabel>
          <FormInput formInputSize="lg" placeholder="XXXX XXXX X4380" />

          <FormLabel className="mt-[2em] font-[500]">Verify Password</FormLabel>
          <FormInput
            className=" mb-[2.6em] "
            formInputSize="lg"
            placeholder="XXXX XXXX X4380"
          />

          <button className="w-[23.75em] h-[2.8em] bg-[#336DBA] rounded-[0.5em] text-white">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
