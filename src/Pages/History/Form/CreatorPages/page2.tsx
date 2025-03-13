import FormArea from "../../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../../Components/base-components/Questionnaire/FormInput";
import CheckboxField from "../../../../Components/base-components/Questionnaire/FormInput/checkbox";
import MultipleInput from "../../../../Components/base-components/Questionnaire/FormInput/multiple";
import RadioField from "../../../../Components/base-components/Questionnaire/FormInput/radio";

export default function CreatorSecondPage() {
    
    const contentTone = [
        { label: 'Formal', value: 'Formal' },
        { label: 'Informal', value: 'Informal' },
        { label: 'Blend', value: 'Blend' }
    ]

    const boolean = [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
    ]

    const contentImpact = [
        { label: 'Clients', value: 'Clients'},
        { label: 'Prospects', value: 'Prospects'},
        { label: 'Working Class', value: 'Working Class'}
    ]

    return (
        
        <form className=" sm:px-20 py-5 flex flex-col items-start lg:grid grid-cols-2 gap-10">
            <FormInput
            title="What would you like to become a thought leader in?"
            placeholder="Your answer"
            type="text"/>
            
            <FormInput
            title="What sources do you enjoy reading and obtaining your research to advise your clients or write about? Share the links please. "
            placeholder="Your answer"
            type="text"/>
            
            <FormArea 
                title="What are your major types of clients? e.g. Industry, job titles."
                placeholder="Your answer"
                
            />
  
            <FormArea 
                title="What are the most important things your clients would like to see in your content?"
                placeholder="Your answer"
            />

            <RadioField 
                heading="Desired Tone for your content"
                options={contentTone}
            />

            <FormArea
                title="To what extent can you give advice on your content? E.g. Any compliance restrictions we should be aware of? or anything else."
                placeholder="Your answer"
            />

            <RadioField 
                heading="Would you like to see quotes from industry specialists and books on your content?"
                options={boolean}
            />
            
            <FormInput
                title="What industry awards would you like to become a constituent of in the near future?"
                placeholder="Your answer"
                type="input"
            />

            <CheckboxField
                heading="Who would you like to have the biggest impact on your content?"
                options={contentImpact}
            />

            <FormArea 
                title="What is your story? (Career path, Career Journey and Goals)"
                placeholder="Your answer"
            />
        </form>
    )
}