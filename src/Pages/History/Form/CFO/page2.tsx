import FormArea from "../../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../../Components/base-components/Questionnaire/FormInput";

export default function Page2({register, errors}: any) {
    return (
        
        <div className="flex flex-col items-start lg:grid grid-cols-2 gap-10">
            <FormInput 
                title="What is your planned business model?"
                placeholder="Enter your response"
                type="text"
                register={register("businessModel")}
                error={errors.businessModel?.message}
            />

            <FormArea 
                title="Have you identified any potential revenue streams? If so, please describe."
                placeholder="Enter your response"
                register={register("streams")}
                error={errors.streams?.message}
            />

            <FormArea 
                title="Do you have ideas about pricing structures, and if so, what do they look like?"
                placeholder="Enter your response"
                register={register("pricing")}
                error={errors.pricing?.message}
            />
        </div>
    )
}