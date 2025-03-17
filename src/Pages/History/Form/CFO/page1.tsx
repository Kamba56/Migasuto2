import { useForm } from "react-hook-form";
import FormInput from "../../../../Components/base-components/Questionnaire/FormInput";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioField from "../../../../Components/base-components/Questionnaire/FormInput/radio";
import FormArea from "../../../../Components/base-components/Questionnaire/FormArea";


const countryOption = [
    { label: 'United Kingdom', value: 'United Kingdom' },
    { label: 'United States', value: 'United States' },
    { label: 'Nigeria', value: 'Nigeria' },
    { label: 'Ghana', value: 'Ghana' },
    { label: 'Kenya', value: 'Kenya' },
    { label: 'South Africa', value: 'South Africa' },
];
export default function Page1({ register, errors }: any) {
    return (
        <div className="flex flex-col items-start lg:grid grid-cols-2 gap-10">
            <FormInput
                title="Client Name"
                placeholder="Enter your name"
                type="text"
                register={register("name")}
                error={errors.name?.message}
            />

            <RadioField 
                heading="Country of domacile"
                options={countryOption}
                register={register}
                name="country"
                error={errors.cuntry?.message}
            />

            <FormArea 
                title="What inspired the idea for your business?"
                placeholder="Enter your response"
                register={register("inspiration")}
                error={errors.inspiration?.message}
            />

            <FormInput
                title="What is your core product or service, and who is your target market?"
                placeholder="Enter your response"
                type="text"
                register={register("product")}
                error={errors.product?.message}
            />

            <FormArea 
                title="What problems does your business aim to solve?"
                placeholder="Enter your response"
                register={register("solutions")}
                error={errors.solutions?.message}
            />

            <FormArea 
                title="How does your idea stand out from competitors?"
                placeholder="Enter your response"
                register={register("advantage")}
                error={errors.advantage?.message}
            />

            <FormArea 
                title="How do you envision your business growing in the first few years?"
                placeholder="Enter your response"
                register={register("envision")}
                error={errors.envision?.message}
            />

            <FormArea 
                title="How do you envision your business growing in the first few years?"
                placeholder="Enter your response"
                register={register("goals")}
                error={errors.goals?.message}
            />
            

        </div>
    )
}