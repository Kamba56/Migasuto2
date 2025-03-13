import FormArea from "../../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../../Components/base-components/Questionnaire/FormInput";
import MultipleInput from "../../../../Components/base-components/Questionnaire/FormInput/multiple";
import RadioField from "../../../../Components/base-components/Questionnaire/FormInput/radio";

export default function CreatorFirstPage() {
    
    const radioOptions = [
        { label: 'Equities', value: 'Equities' },
        { label: 'Alternative Investments', value: 'Alternative Investments' },
        { label: 'Fixed Income', value: 'Fixed Income' },
        { label: 'Multi-Asset Investments', value: 'Multi-Asset Investments' },
    ]
    return (
        
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

        <RadioField 
            heading="What is your favourite Investment Asset Class?"
            options={radioOptions}
        />

        <FormArea
            title="Why is this your favourite Asset Class? (Share any particular sectors or niche you enjoy the most)"
            placeholder="Your answer"
        />
    </form>
    )
}