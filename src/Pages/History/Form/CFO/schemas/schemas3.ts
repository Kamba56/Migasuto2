import * as yup from "yup";

const page3Schema = yup.object().shape({
    startUpCosts: yup.string().required("Field is required"),
    capitalExpenditures: yup.string().required("Field is required"),
    profit: yup.string().required("Field is required"),
});

export default page3Schema;