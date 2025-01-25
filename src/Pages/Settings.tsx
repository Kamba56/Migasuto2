import React, { useState } from 'react';
import ProfileForm from "../Components/ProfileForm";
import ChangePasswordForm from '../Components/ChangePasswordForm';

interface TabItem {
  id: string;
  label: string;
  component: React.FC;
}

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('profile');

  const tabs: TabItem[] = [
    {
      id: 'profile',
      label: 'Profile',
      component: ProfileForm,
    },
    {
      id: 'password',
      label: 'Password',
      component: ChangePasswordForm,
    },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="flex flex-col justify-between items-start">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 font-medium ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-8 w-full">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};


export default Settings;