import * as yup from "yup";

const Schema6 = yup.object().shape({
    salesTargets: yup.string().required("Field is required"),
    adPlan: yup.string().required("Field is required"),
});

export default Schema6;