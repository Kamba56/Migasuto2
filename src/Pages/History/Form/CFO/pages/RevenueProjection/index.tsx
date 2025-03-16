import FormArea from "../../../../../../Components/base-components/Questionnaire/FormArea";

export default function Projection({register, errors}: any) {
    return (
        
        <div className="flex flex-col items-center lg:grid grid-cols-2 gap-10">
            <FormArea 
                title="Have you set initial sales targets for the first 12 months and thereafter? If so, what are they?"
                placeholder="Enter your response"
                register={register("sale_target")}
                error={errors.sale_target?.message}
            />
            <FormArea 
                title="How do you plan to market and promote your product or service?"
                placeholder="Enter your response"
                register={register("marketing")}
                error={errors.marketing?.message}
            />
        </div>
    )
}