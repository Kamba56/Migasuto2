// import React from 'react';

import Bell from "../assets/icons/Notification.svg"
import Category from "../assets/icons/Category.svg"
import DefaultPic from "../assets/images/profile_pic.png"
import Info from "../assets/icons/Info.svg"

import { IoLogOutOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router';

// interface CategoryLayoutProps {
//     children: React.ReactNode;
//     organization: string;
//     category: string;
// }

// export default function CategoryLayout({ children, organization, category }: CategoryLayoutProps) {

export default function CategoryLayout() {
    return (
        <div className="bg-white">
            <header className="flex justify-between items pl-14 md:pl-[82px] px-10 pr-2 md:pr-[42px] pt-[17px] pb-[27px]">
                <div className='flex flex-col justify-center'>
                    <p className='text-[13px]'>Good morning 👋</p>
                    <h3 className='text-[16px] font-bold'>Toronaga</h3>
                </div>
                <div className='flex items-center gap-1 md:gap-10'>
                    <Link to='/'>
                        <img
                            src={Bell}
                            className='w-6 h-6'
                        />
                    </Link>
                    <div className='flex items-center gap-1 md:gap-2'>
                        <Link to='/' className='flex md:gap-2 items-center'>
                            
                            <div className='p-2 bg-eclipse rounded-full'>
                                <img src={DefaultPic} className="w-8 h-8" />
                            </div>
                            <h1 className='font-bold'>Moni Roy</h1>
                        </Link>
                        <button className=' md:ml-8 p-[6px] bg-primary rounded-lg'>
                            <IoLogOutOutline className='text-white' size={"24"} />
                        </button>
                    </div>
                </div>
            </header>
         
        </div>
    );
}
