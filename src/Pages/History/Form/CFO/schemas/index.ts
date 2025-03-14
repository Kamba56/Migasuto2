import * as yup from "yup";

const schemas = yup.object().shape({
    businessName: yup.string().required("Field is required"),
    domicileCountry: yup.string().required("Field is required"),
    inspiration: yup.string().required("Field is required"),
    targetMarket: yup.string().required("Field is required"),
    problems: yup.string().required("Field is required"),
    standOut: yup.string().required("Field is required"),
    growth: yup.string().required("Field is required")
})

export default schemas