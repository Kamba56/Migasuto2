import FormArea from "../../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../../Components/base-components/Questionnaire/FormInput";
import MultipleInput from "../../../../Components/base-components/Questionnaire/FormInput/multiple";
import RadioField from "../../../../Components/base-components/Questionnaire/FormInput/radio";

const radioOptions = [
    { label: 'Equities', value: 'Equities' },
    { label: 'Alternative Investments', value: 'Alternative Investments' },
    { label: 'Fixed Income', value: 'Fixed Income' },
    { label: 'Multi-Asset Investments', value: 'Multi-Asset Investments' },
];

export default function CreatorFirstPage({ register, errors }: any) {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col items-start lg:grid grid-cols-2 gap-10">
                <FormInput
                    title="Client Name"
                    placeholder="Enter your name"
                    type="text"
                    register={register("clientName")}
                    error={errors.clientName?.message}
                    required={true}
                />

                <FormInput
                    title="Select Date"
                    placeholder="Enter date"
                    type="date"
                    register={register("date")}
                    error={errors.date?.message}
                    required={false}
                />

                <MultipleInput
                    register={register("coreValue")}
                    error={errors.coreValue?.message}
                />

                <FormArea
                    title="What are the top 2-5 advice you always provide to your clients?"
                    placeholder="Enter your response"
                    register={register("advice")}
                    error={errors.advice?.message}
                />

                <FormArea
                    title="Who inspires you in your industry? What inspires you about them?"
                    placeholder="Enter your response"
                    register={register("inspiration")}
                    error={errors.inspiration?.message}
                />

                <FormArea
                    title="How would you like your audience to perceive you?"
                    placeholder="Enter your response"
                    register={register("audience")}
                    error={errors.audience?.message}
                />

                <RadioField
                    heading="What is your favourite Investment Asset Class?"
                    options={radioOptions}
                    register={register("assetClass")}
                    error={errors.assetClass?.message}
                />
            </div>
        </div>
    );
}
