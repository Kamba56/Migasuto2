import React from 'react';

import Bell from "../assets/icons/Notification.svg"
import DefaultPic from "../assets/images/profile_pic.png"
import { IoLogOutOutline } from "react-icons/io5";

interface CategoryLayoutProps {
    children: React.ReactNode;
    organization: string;
}

export default function CategoryLayout({ children, organization }: CategoryLayoutProps) {
    return (
        <div>
            <header className="flex justify-between pl-[82px] pr-[42px] pt-[17px] pb-[27px]">
                <div>
                    <p className='text-[13px]'>Good morning 👋</p>
                    <h3 className='text-[16px] font-bold'>{organization}</h3>
                </div>
                <div className='flex items-center gap-10'>
                    <img
                        src={Bell}
                        className='w-6 h-6'
                    />
                    <div className='flex items-center gap-2'>
                        <div className='p-3 bg-eclipse rounded-full'>
                            <img src={DefaultPic}
                                className="w-8 h-8"/>
                        </div>
                        <h1 className='font-bold'>Moni Roy</h1>

                        <div className=' ml-8 p-[6px] bg-primary rounded-lg'>
                        <IoLogOutOutline 
                            className='text-white'
                            size={"24"}
                        />
                        </div>

                    </div>
                </div>
            </header>
            <main className='pl-3 pr-8 '
            >
                {children}
            </main>
        </div>
    );
}
