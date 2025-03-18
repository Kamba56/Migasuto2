import FormArea from "../../../../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../../../../Components/base-components/Questionnaire/FormInput";
import RadioField from "../../../../../../Components/base-components/Questionnaire/FormInput/radio";

export default function Funding({register, errors}: any) {
    const options = [
        {label: 'Yes', value: 'Yes'},
        {label: 'No', value: 'No'},
        {label: 'Maybe', value: 'Maybe'},
    ]
    return (
        
        <div className="flex flex-col items-center lg:grid grid-cols-2 gap-10">
            <FormInput
                title=" How much capital are you currently seeking to raise, if any?"
                placeholder="Enter your response"
                type="number"
                register={register("capital")}
                error={errors.capital?.message}
            />

            <RadioField 
                heading=" Do you have any committed investors?"
                options={options}
                register={register}
                name="investor"
                error={errors.investor?.message}
            />

            <RadioField 
                heading="Are you planning on self-funding initially?"
                options={options}
                register={register}
                name="self_funding"
                error={errors.self_funding?.message}
            />

            <FormInput 
                title="How much of your capital are you willing to invest initially?"
                placeholder="Enter your response"
                type="number"
                register={register("capital_invest")}
                error={errors.capital_invest?.message}
            />

            <FormInput
                title="How do you plan to allocate any initial capital raised?"
                type="number"
                placeholder="Enter your response"
                register={register("capital_raised")}
                error={errors.capital_raised?.message}
            />
        </div>
    )
}