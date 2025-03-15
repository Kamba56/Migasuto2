import * as yup from "yup";

const schemas = yup.object().shape({
    businessName: yup.string().required("Field is required"),
    domicileCountry: yup.string().required("Field is required"),
    inspiration: yup.string().required("Field is required"),
    targetMarket: yup.string().required("Field is required"),
    problems: yup.string().required("Field is required"),
    standOut: yup.string().required("Field is required"),
    growth: yup.string().required("Field is required"),

    businessModel: yup.string().required("Field is required"),
    streams: yup.string().required("Field is required"),
    pricing: yup.string().required("Field is required"),

    startupCost: yup.string().required("Field is required"),
    capitalExpenditures: yup.string().required("Field is required"),
    profit: yup.string().required("Field is required"),

    capital: yup.string().required("Field is required"),
    investors: yup.string().required("Field is required"),
    selfFunding: yup.string().required("Field is required"),
    capitalInvest: yup.string().required("Field is required"),
    capitalRaised: yup.string().required("Field is required"),

    
})

export default schemas