import FormArea from "../../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../../Components/base-components/Questionnaire/FormInput";
import RadioField from "../../../../Components/base-components/Questionnaire/FormInput/radio";
import CheckboxField from "../../../../Components/base-components/Questionnaire/FormInput/checkbox";

const contentTone = [
    { label: 'Formal', value: 'Formal' },
    { label: 'Informal', value: 'Informal' },
    { label: 'Blend', value: 'Blend' }
];

const boolean = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' }
];

const contentImpact = [
    { label: 'Clients', value: 'Clients' },
    { label: 'Prospects', value: 'Prospects' },
    { label: 'Working Class', value: 'Working Class' }
];

export default function CreatorSecondPage({ register, errors }: any) {
    return (
        <div className="flex flex-col items-start lg:grid grid-cols-2 gap-10">
            <FormInput
                title="What would you like to become a thought leader in?"
                placeholder="Your answer"
                type="text"
                register={register("thoughtLeader")}
                error={errors.thoughtLeader?.message}
            />

            <FormArea
                title="What sources do you enjoy reading and obtaining your research from?"
                placeholder="Your answer"
                register={register("research")}
                error={errors.research?.message}
            />

            <FormArea
                title="What are your major types of clients?"
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
        </div>
    );
}
