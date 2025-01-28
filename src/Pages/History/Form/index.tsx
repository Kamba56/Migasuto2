import { useState } from "react";
import FormArea from "../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../Components/base-components/Questionnaire/FormInput";
import CategoryLayout from "../../../Components/CategoryLayout";
import { set } from "react-hook-form";
import MultipleInput from "../../../Components/base-components/Questionnaire/FormInput/multiple";

export default function Questions() {
    
    return (
        <CategoryLayout
            category="History"
            organization="Migasuto">
            <section className="px-10 bg-white">
                <p className="text-lg font-bold">Back</p>
                <div className="pl-16 flex flex-col md:flex-row justify-between items-center">
                    <div className="">
                        <h1 className="text-2xl text-dark font-semibold">New Client Questionnaire</h1>
                        <p className="text-[13px] text-secondary_dark w-[400px] ">Please endeavour to complete all the sections that are relevant to you</p>
                    </div><div className="bg-blue-50 rounded-xl flex w-fit p-2">
  <button
    className="bg-primary text-white w-[175px] rounded-lg py-2 focus:outline-none transition-all duration-300"
  >
    Form 1
  </button>
  <button
    className="text-gray-500 bg-transparent w-[175px] rounded-lg py-2 hover:text-gray-700 focus:outline-none transition-all duration-300"
  >
    Form 2
  </button>
</div>

                </div>
                <p className="text-center">Please provide  your response below</p>
                
                <form className="px-20 py-5 grid grid-cols-2 gap-10">
                    <FormInput 
                    title="Client Name"
                    placeholder="Enter your name"
                    type="text"/>
                    
                    <FormInput 
                    title="Select Date"
                    placeholder="Enter date"
                    type="date"/>

                        <MultipleInput 
                            title="Email Address"
                            placeholder="Enter your email"
                            type="text"
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