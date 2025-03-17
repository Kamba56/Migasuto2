import * as yup from "yup";

const Schema8 = yup.object().shape({
    financial_metrics: yup.string().required("Field is required"),
    cash_flow_time: yup.string().required("Field is required"),
});

export default Schema8;