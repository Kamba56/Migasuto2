import React from 'react'
import Category from "../assets/icons/Category.svg"
import Info from "../assets/icons/Info.svg"
import { RxCross2 } from "react-icons/rx";

const CategoryL = () => {
  return (
    <div>
           <main className='flex flex-col flex-grow py-5 px-2 md:px-6 md:py-8 gap-0 md:gap-4 bg-blue_fade'>
                <section className='flex justify-between'>
                    
                    <div className='flex gap-2 md:gap-4 items-center'>
                        <img src={Category}
                            className='w-4 h-4'
                            />
                        <h2 className='text-md md:text-2xl font-semibold tracking-[0.24px]'>Dashboard</h2>
                    </div>
                    <div className='bg-[#0d6edd1a] w-fit lg:w-auto rounded-lg flex items-center p-1 py-2 md:p-3 cursor-pointer'>
                        <img src={Info} />
                        <p className='md:ml-2 mr-2 md:mr-20 text-xs'>Please verify your email address</p>
                        <RxCross2 size={15} />
                    </div>
                </section>

            </main>
      
    </div>
  )
}

export default CategoryL
