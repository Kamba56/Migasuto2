import { useForm } from "react-hook-form";
import FormArea from "../../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../../Components/base-components/Questionnaire/FormInput";
import MultipleInput from "../../../../Components/base-components/Questionnaire/FormInput/multiple";
import RadioField from "../../../../Components/base-components/Questionnaire/FormInput/radio";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    clientName: yup.string().required("Client name is required"),
    date: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)").required("Date is required"),
    coreValue: yup.string().required("Core value is required"),
    advice: yup.string().required("Advice is required"),
    inspiration: yup.string().required("Inspiration is required"),
    audience: yup.string().required("Audience perception is required"),
    assetClass: yup.string().required("Asset class is required"),


});



export default function CreatorFirstPage() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    const onSubmit = (data: any) => {
      console.log("Form Data:", data);
    };
    
    const radioOptions = [
        { label: 'Equities', value: 'Equities' },
        { label: 'Alternative Investments', value: 'Alternative Investments' },
        { label: 'Fixed Income', value: 'Fixed Income' },
        { label: 'Multi-Asset Investments', value: 'Multi-Asset Investments' },
    ]
        return (
            <form onSubmit={handleSubmit(onSubmit)} className="sm:px-20 py-5  flex flex-col gap-10">
                
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
                
                <button type="submit" className="bg-primary w-20">ss</button>
            </form>
    )
}