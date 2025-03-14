import { useForm } from "react-hook-form";
import FormInput from "../../../../Components/base-components/Questionnaire/FormInput";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioField from "../../../../Components/base-components/Questionnaire/FormInput/radio";

const schema = yup.object().shape({
    clientName: yup.string().required("Client name is required"),
})

export default function Page1() {
    const {
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    return (
        <div>
            
            <FormInput
                title="Client Name"
                placeholder="Enter your name"
                type="text"
                register={register("clientName")}
                error={errors.clientName?.message}
            />
        </div>
    )
}