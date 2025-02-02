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

  return (
    <div className="flex justify-between items-start w-3/6 mx-auto">
      <div className="profile-image-container">
        <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Upload Logo
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