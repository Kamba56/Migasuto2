import * as yup from "yup";

const Schema4 = yup.object().shape({
    capital: yup.string().required("Field is required"),
    investor: yup.string().required("Field is required"),
    self_funding: yup.string().required("Field is required"),
    capital_invest: yup.string().required("Field is required"),
    capital_raised: yup.string().required("Field is required"),
});

export default Schema4;