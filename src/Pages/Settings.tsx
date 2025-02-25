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
  const [tabInfo, setTabInfo] = useState<{ label: string, info: string}>({
    label: 'Profile',
    info: 'You profile details below'

  })
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
    if (tabId === 'password') {
      setTabInfo({
        label: 'Change Password',
        info: 'Add a password that make your account secure'
      })
    }
    else {
      setTabInfo({
        label: 'Profile',
        info: 'You profile details below'
      })
    }
  };

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    // initially was a col
    <div className="mt-6 flex flex-col justify-between items-start w-full rounded-3xl py-7 px-7 bg-white">

      <div className="flex flex-row justify-between items-center w-full">
        <div className='ml-6'>
          {tabInfo.label && (
            <h2 className="text-2xl font-bold mb-6">{tabInfo.label}</h2>
          )}
          {tabInfo.info && (
            <p className=''>{tabInfo.info}</p>
          )}
          
        </div>
        <div className='mr-6 rounded-lg bg-blue_fade p-1 flex gap-1'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-9 py-2 font-medium rounded-lg ${
                activeTab === tab.id
                  ? 'bg-blue-20 text-white'
                  : 'bg-blue_fade text-gray'
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
          
        </div>
      </div>
      {/* to change with width of the component to halve not full */}
      <div className="mt-8 w-full">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};


export default Settings;