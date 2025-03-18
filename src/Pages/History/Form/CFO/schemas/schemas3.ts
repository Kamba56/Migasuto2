import * as yup from "yup";

const Schema3 = yup.object().shape({
    startup_cost: yup.string().required("Field is required"),
    expenditure: yup.string().required("Field is required"),
    profitability: yup.string().required("Field is required"),
});

export default Schema3;