import * as yup from "yup";

const Schema1 = yup.object().shape({
    name: yup.string().required("Business name is required"),
    country: yup.string().required("Domicile country is required"),
    inspiration: yup.string().required("Inspiration is required"),
    product: yup.string().required("Target market is required"),
    solutions: yup.string().required("Problems are required"),
    advantage: yup.string().required("Stand out is required"),
    envision: yup.string().required("Growth is required"),
    goals: yup.string().required("Growth is required"),
});

export default Schema1;