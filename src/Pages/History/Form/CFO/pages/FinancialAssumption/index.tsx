import FormInput from "../../../../../../Components/base-components/Questionnaire/FormInput";


export default function FinancialAssumption({register, errors}: any) {
    return (
        
        <div className="flex flex-col items-center lg:grid grid-cols-1 gap-10">
            <FormInput
                title="Have you estimated the initial start-up costs required to bring your idea to market?"
                placeholder="Enter your response"
                type="number"
                register={register("startup_cost")}
                error={errors.startup_cost?.message}
            />
            <FormInput
                title="Do you anticipate any significant capital expenditures in the near term (e.g., equipment, software, real estate)?"
                placeholder="Enter your response"
                type="number"
                register={register("expenditure")}
                error={errors.expenditure?.message}
            />
            <FormInput
                title="What are your assumptions for your business’s break-even point and time frame for profitability?"
                placeholder="Enter your response"
                type="number"
                register={register("profitability")}
                error={errors.profitability?.message}
            />
        </div>
    )
}