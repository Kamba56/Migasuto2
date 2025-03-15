import * as yup from "yup";

const Schema7 = yup.object().shape({
    challenges: yup.string().required("Field is required"),
    legalConcerns: yup.string().required("Field is required"),
});

export default Schema7;