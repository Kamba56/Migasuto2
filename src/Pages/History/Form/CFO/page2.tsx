import FormArea from "../../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../../Components/base-components/Questionnaire/FormInput";

export default function Page2({register, errors}: any) {
    return (
        
        <div className="flex flex-col items-center lg:grid grid-cols-1 gap-10">
            <FormInput 
                title="What is your planned business model?"
                placeholder="Enter your response"
                type="text"
                register={register("business_model")}
                error={errors.business_model?.message}
            />

            <FormArea 
                title="Have you identified any potential revenue streams? If so, please describe."
                placeholder="Enter your response"
                register={register("revenue_stream")}
                error={errors.revenue_stream?.message}
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