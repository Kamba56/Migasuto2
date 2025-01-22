import React from 'react';

import Bell from "../assets/icons/Notification.svg"
import Category from "../assets/icons/Category.svg"
import DefaultPic from "../assets/images/profile_pic.png"
import Info from "../assets/icons/Info.svg"

import { IoLogOutOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

interface CategoryLayoutProps {
    children: React.ReactNode;
    organization: string;
    category: string;
}

export default function CategoryLayout({ children, organization, category }: CategoryLayoutProps) {
    return (
        <div>
            <header className="flex justify-between items md:pl-[82px] px-10 md:pr-[42px] pt-[17px] pb-[27px]">
                <div className='flex flex-col justify-center'>
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
                            <img src={DefaultPic} className="w-8 h-8" />
                        </div>
                        <h1 className='font-bold'>Moni Roy</h1>
                        <button className=' ml-8 p-[6px] bg-primary rounded-lg'>
                            <IoLogOutOutline className='text-white' size={"24"} />
                        </button>
                    </div>
                </div>
            </header>
            <main className='flex flex-col flex-grow pl-6 pr-4 py-8 gap-4 bg-blue_fade'>
                <section className='flex justify-between'>
                    
                    <div className='flex gap-4 items-center'>
                        <img src={Category}
                            className='w-4 h-4'
                            />
                        <h2 className='text-lg md:text-2xl font-semibold tracking-[0.24px]'>{category}</h2>
                    </div>
                    <div className='bg-[#0d6edd1a] w-[300px] lg:w-auto rounded-lg flex items-center px-3 py-4 cursor-pointer'>
                        <img src={Info} />
                        <p className='ml-2 mr-20'>Please verify your email address</p>
                        <RxCross2 />
                    </div>
                </section>

                {children}
            </main>
        </div>
    );
}
