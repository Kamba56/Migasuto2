import * as yup from "yup";

const Schema5 = yup.object().shape({
    projected_needs: yup.string().required("Field is required"),
    hiring: yup.string().required("Field is required"),
    job_hire: yup.string().required("Field is required"),
});

export default Schema5;