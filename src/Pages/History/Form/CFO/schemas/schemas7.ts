import * as yup from "yup";

const Schema7 = yup.object().shape({
    risk: yup.string().required("Field is required"),
    compliance_concern: yup.string().required("Field is required"),
});

export default Schema7;