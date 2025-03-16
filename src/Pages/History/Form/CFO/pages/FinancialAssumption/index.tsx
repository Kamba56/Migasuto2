import FormArea from "../../../../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../../../../Components/base-components/Questionnaire/FormInput";


export default function FinancialAssumption({register, errors}: any) {
    return (
        
        <div className="flex flex-col items-center lg:grid grid-cols-1 gap-10">
            <FormInput
                title="Have you estimated the initial start-up costs required to bring your idea to market?"
                placeholder="Enter your response"
                type="text"
                register={register("startup_cost")}
                error={errors.startup_cost?.message}
            />

            <FormArea
                title="Do you anticipate any significant capital expenditures in the near term (e.g., equipment, software, real estate)?"
                placeholder="Enter your response"
                register={register("expenditure")}
                error={errors.expenditure?.message}
            />

            <FormArea 
                title="What are your assumptions for your business’s break-even point and time frame for profitability?"
                placeholder="Enter your response"
                register={register("profitability")}
                error={errors.profitability?.message}
            />
        </div>
    )
}