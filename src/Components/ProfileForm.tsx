import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FormData {
  fullName: string;
  accountType: string;
  companyName: string;
  companyType: string;
  teamStrength: string;
}

const ProfileForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    accountType: 'Company',
    companyName: '',
    companyType: '',
    teamStrength: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<FormData>('/api/profile');
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openFile = () => {
    
  }
  

  return (
    <div className="flex justify-between items-center w-3/4 mx-auto">
      <div className="flex flex-col justify-center items-center p-5">
        {/* Intially is w-32 h-32 */}
        <div className="bg-gray-200 rounded-full mx-auto">
          <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="81.5" cy="81.5" r="79.5" fill="#ECF0FF" stroke="#465FF1" stroke-width="4"/>
            <path d="M82.3453 94.3947V87.8652" stroke="#465FF1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M98.2887 65.1924C102.638 65.1924 106.138 68.7183 106.138 73.0679V81.9213C99.8072 85.6274 91.4427 87.8665 82.3319 87.8665C73.221 87.8665 64.8823 85.6274 58.551 81.9213V73.0421C58.551 68.6926 62.077 65.1924 66.4265 65.1924H98.2887Z" stroke="#465FF1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M91.3531 65.1806V64.2386C91.3531 61.0987 88.8052 58.5508 85.6653 58.5508H79.0252C75.8853 58.5508 73.3373 61.0987 73.3373 64.2386V65.1806" stroke="#465FF1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M58.6141 91.3223L59.1005 97.7796C59.4299 102.132 63.0563 105.496 67.4186 105.496H97.2708C101.633 105.496 105.26 102.132 105.589 97.7796L106.075 91.3223" stroke="#465FF1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <button className="flex justify-center items-center mt-5 bg-white hover:bg-blue-600 hover:text-white text-black px-4 py-2 rounded w-full outline outline-1 outline-blue-500"
          onClick={openFile}
        >
        {/* hover:stroke-white stroke-2 */}
        <svg className='mx-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.36843 8.79442C7.78243 8.79442 8.11843 9.13042 8.11843 9.54442C8.11843 9.95842 7.78243 10.2944 7.36843 10.2944H6.43543C4.81643 10.2944 3.50043 11.6104 3.50043 13.2284V18.1034C3.50043 19.7224 4.81643 21.0384 6.43543 21.0384H17.5654C19.1834 21.0384 20.5004 19.7224 20.5004 18.1034V13.2194C20.5004 11.6064 19.1884 10.2944 17.5764 10.2944H16.6334C16.2194 10.2944 15.8834 9.95842 15.8834 9.54442C15.8834 9.13042 16.2194 8.79442 16.6334 8.79442H17.5764C20.0154 8.79442 22.0004 10.7794 22.0004 13.2194V18.1034C22.0004 20.5494 20.0104 22.5384 17.5654 22.5384H6.43543C3.99043 22.5384 2.00043 20.5494 2.00043 18.1034V13.2284C2.00043 10.7834 3.99043 8.79442 6.43543 8.79442H7.36843ZM12.531 2.22202L15.447 5.15002C15.739 5.44402 15.738 5.91802 15.445 6.21002C15.151 6.50202 14.677 6.50202 14.385 6.20802L12.7494 4.56677L12.75 15.5413H11.25L11.2494 4.56677L9.61603 6.20802C9.47003 6.35602 9.27703 6.42902 9.08503 6.42902C8.89403 6.42902 8.70203 6.35602 8.55603 6.21002C8.26303 5.91802 8.26103 5.44402 8.55403 5.15002L11.469 2.22202C11.75 1.93902 12.25 1.93902 12.531 2.22202Z" fill="#26203B"/>
        </svg>
        <span>Upload Logo</span>
        </button>
      </div>
      <div className="flex-1 ml-8">
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block font-medium mb-2">
              Full Name <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="accountType" className="block font-medium mb-2">
              Account Type <span className='text-red-500'>*</span>
            </label>
            <select
              id="accountType"
              name="accountType"
              value={formData.accountType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="Company">Company</option>
              <option value="Individual">Individual</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="companyName" className="block font-medium mb-2">
              Company Name <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter company name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyType" className="block font-medium mb-2">
              Company Type <span className='text-red-500'>*</span>
            </label>
            <select
              id="companyType"
              name="companyType"
              value={formData.companyType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select Company Type</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Retail">Retail</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="teamStrength" className="block font-medium mb-2">
              Team Strength <span className='text-red-500'>*</span>
            </label>
            <select
              id="teamStrength"
              name="teamStrength"
              value={formData.teamStrength}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select Team Strength</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-100">51-100</option>
              <option value="100+">100+</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;