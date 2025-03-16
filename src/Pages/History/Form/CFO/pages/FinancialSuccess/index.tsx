import FormArea from "../../../../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../../../../Components/base-components/Questionnaire/FormInput";

export default function FinancialSuccess({register, errors}: any) {
    return (
        
        <div className="flex flex-col items-center lg:grid grid-cols-2 gap-10">
            <FormArea 
                title="What financial metrics (e.g., gross margin, net profit) do you see as key indicators of success for this business?"
                placeholder="Enter your response"
                register={register("financialMetrics")}
                error={errors.financialMetrics?.message}
            />
            <FormInput
                title="What time frame are you considering for reaching profitability or achieving a stable cash flow?"
                placeholder="Enter your response"
                type="text"
                register={register("timeFrame")}
                error={errors.timeFrame?.message}
            />
        </div>
    )
}