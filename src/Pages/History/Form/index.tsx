import { useState } from "react";
import FormArea from "../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../Components/base-components/Questionnaire/FormInput";
import CategoryLayout from "../../../Components/CategoryLayout";
import { set } from "react-hook-form";
import MultipleInput from "../../../Components/base-components/Questionnaire/FormInput/multiple";
import Example from "../../../Components/framer-motion/animations/toggle";

import { IoMdArrowRoundBack } from "react-icons/io";

export default function Questions() {
    
    return (
        <CategoryLayout
            category="History"
            organization="Migasuto">
            <section className="p-10 bg-white flex flex-col gap-3">
                <p className="text-lg font-bold flex gap-4">
                    <IoMdArrowRoundBack 
                        size={25}/>Back</p>
                <div className="sm:pl-16 flex flex-col md:flex-row gap-2 justify-between items-center">
                    <div className="">
                        <h1 className="text-2xl text-dark font-semibold">New Client Questionnaire</h1>
                        <p className="text-[13px] text-secondary_dark sm:w-[400px] ">Please endeavour to complete all the sections that are relevant to you</p>
                    </div>
                    <Example />

                </div>
                <p className="text-center text-gray">Please provide  your response below</p>
                
                <form className="px-20 py-5 flex flex-col items-center lg:grid grid-cols-2 gap-10">
                    <FormInput 
                    title="Client Name"
                    placeholder="Enter your name"
                    type="text"/>
                    
                    <FormInput 
                    title="Select Date"
                    placeholder="Enter date"
                    type="date"/>

                        <MultipleInput
                        />
                    
                    <FormArea 
                        title="What are the top 2-5 advice you always provide to your clients?"
                        placeholder="Enter your response"
                        
                    />

                    <FormArea 
                        title="Who inspires you in your industry? What inspires you about them?"
                        placeholder="Enter your response"
                    />

                    <FormArea 
                        title="How would you like your audience to perceive you?"
                        placeholder="Enter your response"
                    />

                </form>
            </section>
            
        </CategoryLayout>
    )
}