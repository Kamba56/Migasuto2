import * as yup from "yup";
const Schema9 = yup.object().shape({
    backStatement: yup
      .mixed()
      .test("fileRequired", "File is required", (value) => {
        return value instanceof FileList ? value.length > 0 : !!value;
      }),
    cashFlow: yup
      .mixed()
      .test("fileRequired", "File is required", (value) => {
        return value instanceof FileList ? value.length > 0 : !!value;
      }),
    budgeting: yup.mixed().nullable(), // Optional field
  });
  

export default Schema9