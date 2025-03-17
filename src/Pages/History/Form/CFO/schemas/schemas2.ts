import * as yup from "yup";

const Schema2 = yup.object().shape({
    business_model: yup.string().required("Field is required"),
    revenue_stream: yup.string().required("Field is required"),
    pricing: yup.string().required("Field is required"),
});

export default Schema2;