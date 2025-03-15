import * as yup from "yup";

const Schema2 = yup.object().shape({
    businessModel: yup.string().required("Field is required"),
    streams: yup.string().required("Field is required"),
    pricing: yup.string().required("Field is required"),
});

export default Schema2;