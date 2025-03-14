
import * as yup from "yup";

const schema = yup.object().shape({
    
    clientName: yup.string().required("Client name is required"),
    date: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)").required("Date is required"),
    coreValue: yup.string().required("Core value is required"),
    advice: yup.string().required("Advice is required"),
    inspiration: yup.string().required("Inspiration is required"),
    audience: yup.string().required("Audience perception is required"),
    assetClass: yup.string().required("Asset class is required"),

    thoughtLeader: yup.string().required("Field is required"),
    clientTypes: yup.string().required("Field is required"),
    important: yup.string().required("Field is required"),
    research: yup.string().required("Field is required"),
    content: yup.string().required("Field is required"),
    contentAdvice: yup.string().required("Field is required"),
    viewQuotes: yup.string().required("Field is required"),
    story: yup.string().required("Field is required")
});

export default schema