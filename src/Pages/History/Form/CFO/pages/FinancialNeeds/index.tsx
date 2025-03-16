import FormArea from "../../../../../../Components/base-components/Questionnaire/FormArea";
import FormInput from "../../../../../../Components/base-components/Questionnaire/FormInput";
import RadioField from "../../../../../../Components/base-components/Questionnaire/FormInput/radio";

export default function FinancialNeeds({register, errors}: any) {
    const workersOptions = [
        {label: 'Employees', value: 'Employees'},
        {label: 'Contractors', value: 'Contractors'},
        {label: 'Freelancers', value: 'Freelancers'},
    ]
    return (
        
        <div className="flex flex-col items-center gap-10">
            <FormInput
                title="What is your projected operating expenses (e.g, salaries, rent, etc)?"
                placeholder="Enter your response"
                type="number"
                register={register("expenses")}
                error={errors.expenses?.message}
            />

            <RadioField 
                heading=" Do you anticipate hiring employess, or will you work with contractors and freelancers?"
                options={workersOptions}
                register={register}
                name="workers"
                error={errors.workers?.message}
             />

            <FormArea 
                title="What job roles will you initially hire for?"
                placeholder="Enter your response"
                register={register("jobRoles")}
                error={errors.jobRoles?.message}
            />
        </div>
    )
}