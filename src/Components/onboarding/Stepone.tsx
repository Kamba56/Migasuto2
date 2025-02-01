import { useState, ChangeEvent } from "react";

export default function Stepone() {
  const [formData, setFormData] = useState({
    fullName: "",
    accountType: "Company",
    companyName: "",
    companyType: "",
    teamStrength: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the input field
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-[20em]">
      <div className="flex flex-col text-start">
        <label htmlFor="fullName" className="font-[500]">
          Full Name
        </label>
        <input
          className="border-[#465FF166] border-[0.1em] rounded-[0.5em] placeholder:text-[0.8em] max-h-[2.3em] text-[0.9em] mb-[1.6em] focus:shadow-md focus:ring-0"
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name."
          required
        />
      </div>

      <div className="flex flex-col text-start">
        <label htmlFor="accounttype" className="font-[500]">
          Account Type
        </label>
        <select
          value={formData.accountType}
          onChange={handleChange}
          required
          className="border-[#465FF166] border-[0.1em] rounded-[0.5em] placeholder:text-[0.8em] max-h-[2.3em] text-[0.9em] mb-[1.6em]"
        >
          <option value={formData.accountType}>Company</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div className="flex flex-col text-start">
        <label htmlFor="companyName" className="font-[500]">
          Company Name
        </label>
        <input
          className="border-[#465FF166] border-[0.1em] rounded-[0.5em] placeholder:text-[0.8em] max-h-[2.3em] text-[0.9em] mb-[1.6em] focus:shadow-md focus:ring-0"
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter your company name."
          required
        />
      </div>

      <div className="flex flex-col text-start">
        <label htmlFor="accounttype" className="font-[500]">
          Company Type
        </label>
        <select
          value={formData.accountType}
          onChange={handleChange}
          required
          className="border-[#465FF166] border-[0.1em] rounded-[0.5em] placeholder:text-[0.8em] max-h-[2.3em] text-[0.9em] mb-[1.6em]"
        >
          <option value={formData.companyType}>{formData.companyType}</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div className="flex flex-col text-start">
        <label htmlFor="accounttype" className="font-[500]">
          Team Strength
        </label>
        <select
          value={formData.teamStrength}
          onChange={handleChange}
          required
          className="border-[#465FF166] border-[0.1em] rounded-[0.5em] placeholder:text-[0.8em] max-h-[2.3em] text-[0.9em] mb-[1.6em]"
        >
          <option value={formData.teamStrength}>{formData.teamStrength}</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-[#465FF1] min-w-[13em] min-h-[3em] rounded-[0.6em] text-[#FFFFFF] font-[500]"
      >
        continue
      </button>
    </form>
  );
}
