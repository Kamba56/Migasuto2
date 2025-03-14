import FormArea from "../../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../../Components/base-components/Questionnaire/FormInput";
import CheckboxField from "../../../../Components/base-components/Questionnaire/FormInput/checkbox";
import MultipleInput from "../../../../Components/base-components/Questionnaire/FormInput/multiple";
import RadioField from "../../../../Components/base-components/Questionnaire/FormInput/radio";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
    thoughtLeader: yup.string().required("Field is required"),
    clientTypes: yup.string().required("Field is required"),
    important: yup.string().required("Field is required"),
    research: yup.string().required("Field is required"),
    content: yup.string().required("Field is required"),
    contentAdvice: yup.string().required("Field is required"),
    viewQuotes: yup.string().required("Field is required"),
    story: yup.string().required("Field is required")
});

export default function CreatorSecondPage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
    };

    
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
        
        
        <form onSubmit={handleSubmit(onSubmit)} className=" sm:px-20 py-5 flex flex-col items-start lg:grid grid-cols-2 gap-10">
            <FormInput
            title="What would you like to become a thought leader in?"
            placeholder="Your answer"
            type="text"
            register={register("thoughtLeader")}
            error={errors.thoughtLeader?.message}
            />

            <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg">Submit</button>
            
            <FormArea  
                title="What sources do you enjoy reading and obtaining your research to advise your clients or write about? Share the links please."
                placeholder="Your answer"
                register={register("research")}
                error={errors.research?.message}
                
            />
            <FormArea  
                title="What are your major types of clients? e.g. Industry, job titles."
                placeholder="Your answer"
                register={register("clientTypes")}
                error={errors.clientTypes?.message}
                
            />
  
            <FormArea 
                title="What are the most important things your clients would like to see in your content?"
                placeholder="Your answer"
                register={register("important")}
                error={errors.important?.message}
            />

            <RadioField 
                heading="Desired Tone for your content"
                options={contentTone}
                register={register("content")}
                error={errors.content?.message}
            />

            <FormArea
                title="To what extent can you give advice on your content? E.g. Any compliance restrictions we should be aware of? or anything else."
                placeholder="Your answer"
                register={register("contentAdvice")}
                error={errors.contentAdvice?.message}
            />

            <RadioField 
                heading="Would you like to see quotes from industry specialists and books on your content?"
                options={boolean}
                register={register("viewQuotes")}
                error={errors.viewQuotes?.message}
            />

            <CheckboxField
                heading="Who would you like to have the biggest impact on your content?"
                options={contentImpact}
            />

            <FormArea 
                title="What is your story? (Career path, Career Journey and Goals)"
                placeholder="Your answer"
                register={register("story")}
                error={errors.story?.message}
                required={true}
            />
        </form>
    )
}