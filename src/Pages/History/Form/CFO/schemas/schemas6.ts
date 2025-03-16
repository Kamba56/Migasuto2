import * as yup from "yup";

const Schema6 = yup.object().shape({
    sale_target: yup.string().required("Field is required"),
    marketing: yup.string().required("Field is required"),
});

export default Schema6;