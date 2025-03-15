import * as yup from "yup";

const Schema8 = yup.object().shape({
    financialMetrics: yup.string().required("Field is required"),
    timeFrame: yup.string().required("Field is required"),
});

export default Schema8;