import FormArea from "../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../Components/base-components/Questionnaire/FormInput";
import MultipleInput from "../../../Components/base-components/Questionnaire/FormInput/multiple";
import HistoryToggle from "../../../Components/framer-motion/animations/toggle";
import Back from '../../../assets/icons/Back.svg'

export default function Questions() {
    
    return (
        <section>
            <section className="py-10 px-5 sm:px-10 rounded-3xl bg-white flex flex-col gap-3">
                <p className="text-lg font-bold flex gap-4">
                <img src={Back} />Back</p>
                <div className="sm:pl-16 flex flex-col md:flex-row gap-2 justify-between items-center">
                    <div className="">
                        <h1 className="text-2xl text-dark font-semibold">New Client Questionnaire</h1>
                        <p className="text-[13px] text-secondary_dark sm:w-[400px] ">Please endeavour to complete all the sections that are relevant to you</p>
                    </div>
                    <HistoryToggle />

                </div>
                <p className="text-center text-gray">Please provide  your response below</p>
                
                <form className=" sm:px-20 py-5 flex flex-col items-start lg:grid grid-cols-2 gap-10">
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
            
        </section>
    )
}