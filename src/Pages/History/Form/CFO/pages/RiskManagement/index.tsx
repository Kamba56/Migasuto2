import FormArea from "../../../../../../Components/base-components/Questionnaire/FormArea";

export default function RiskManagement({register, errors}: any) {
    return (
        
        <div className="flex flex-col items-center lg:grid grid-cols-2 gap-10">
            <FormArea  
                title="What do you see as the biggest risks or challenges to getting your business off the ground?"
                placeholder="Enter your response"
                register={register("challenges")}
                error={errors.challenges?.message}
            />
            <FormArea 
                title="Are there legal, regulatory, or compliance concerns specific to your industry?"
                placeholder="Enter your response"
                register={register("legalConcerns")}
                error={errors.legalConcerns?.message}
            />
        </div>
    )
}