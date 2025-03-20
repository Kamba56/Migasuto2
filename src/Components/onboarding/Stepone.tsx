import { Link } from "react-router";
import { useSignup } from "./SignupContext";

export default function Stepone() {
  const { signupData, setSignupData } = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="min-w-[30em]">
        <div className="flex flex-col text-start">
          <label htmlFor="fullName" className="font-[550]">
            Full Name
          </label>
          <input
            className="border-[#465FF166] border-[0.1em] rounded-[0.5em] placeholder:text-[1em] max-h-[3.69em] text-[0.9em] mb-[1.6em] focus:shadow-md focus:ring-0"
            type="text"
            id="fullName"
            name="fullName"
            value={signupData.name}
            onChange={(e) => {
              setSignupData({ name: e.target.value });
            }}
            placeholder="Enter your full name."
            required
          />
        </div>

        <div className="flex flex-col text-start">
          <label htmlFor="accounttype" className="font-[550]">
            Account Type
          </label>
          <input
            className="border-[#465FF166] border-[0.1em] rounded-[0.5em] placeholder:text-[1em] max-h-[3.69em] text-[0.9em] mb-[1.6em] focus:shadow-md focus:ring-0"
            type="text"
            id="accountType"
            name="accountType"
            value={signupData.accountType}
            onChange={(e) => {
              setSignupData({ accountType: e.target.value });
            }}
            placeholder="Enter Account Type."
            required
          />
        </div>

        <div className="flex flex-col text-start">
          <label htmlFor="companyName" className="font-[550]">
            Company Name
          </label>
          <input
            className="border-[#465FF166] border-[0.1em] rounded-[0.5em] placeholder:text-[1em] max-h-[3.69em] text-[0.9em] mb-[1.6em] focus:shadow-md focus:ring-0"
            type="text"
            id="companyName"
            name="companyName"
            value={signupData.companyName}
            onChange={(e) => {
              setSignupData({ companyName: e.target.value });
            }}
            placeholder="Enter your company name."
            required
          />
        </div>

        <div className="flex flex-col text-start">
          <label htmlFor="accounttype" className="font-[550]">
            Company Type
          </label>
          <input
            className="border-[#465FF166] border-[0.1em] rounded-[0.5em] placeholder:text-[1em] max-h-[3.69em] text-[0.9em] mb-[1.6em] focus:shadow-md focus:ring-0"
            type="text"
            id="companyType"
            name="companyType"
            value={signupData.companyType}
            onChange={(e) => {
              setSignupData({ companyType: e.target.value });
            }}
            placeholder="Enter Company Type."
            required
          />
        </div>

        <div className="flex flex-col text-start">
          <label htmlFor="accounttype" className="font-[550]">
            Team Strength
          </label>
          <input
            className="border-[#465FF166] border-[0.1em] rounded-[0.5em] placeholder:text-[1em] max-h-[3.69em] text-[0.9em] mb-[1.6em] focus:shadow-md focus:ring-0"
            type="text"
            id="teamStrength"
            name="teamStrength"
            value={signupData.teamStrength}
            onChange={(e) => {
              setSignupData({ teamStrength: e.target.value });
            }}
            placeholder="Enter your Team Strength."
            required
          />
        </div>

        <Link to={"/onboarding/2"}>
          <button
            type="submit"
            className="bg-[#465FF1] min-w-[13em] min-h-[3em] rounded-[0.6em] text-[#FFFFFF] font-[550]"
          >
            Continue
          </button>
        </Link>
      </form>
    </div>
  );
}
