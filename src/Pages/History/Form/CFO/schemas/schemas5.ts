import * as yup from "yup";

const Schema5 = yup.object().shape({
    expenses: yup.string().required("Field is required"),
    workers: yup.string().required("Field is required"),
    jobRoles: yup.string().required("Field is required"),
});

export default Schema5;