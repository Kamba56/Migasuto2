import * as yup from "yup";

const Schema1 = yup.object().shape({
    businessName: yup.string().required("Business name is required"),
    domicileCountry: yup.string().required("Domicile country is required"),
    inspiration: yup.string().required("Inspiration is required"),
    targetMarket: yup.string().required("Target market is required"),
    problems: yup.string().required("Problems are required"),
    standOut: yup.string().required("Stand out is required"),
    growth: yup.string().required("Growth is required"),
});

export default Schema1;