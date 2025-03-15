import * as yup from "yup";

const Schema4 = yup.object().shape({
    capital: yup.string().required("Field is required"),
    investors: yup.string().required("Field is required"),
    selfFunding: yup.string().required("Field is required"),
    capitalInvest: yup.string().required("Field is required"),
    capitalRaised: yup.string().required("Field is required"),
});

export default Schema4;