import * as yup from "yup";
const Schema9 = yup.object().shape({
    bank_statement: yup
      .mixed()
      .test("fileRequired", "File is required", (value) => {
        return value instanceof FileList ? value.length > 0 : !!value;
      }),
    cash_flow_statement: yup
      .mixed()
      .test("fileRequired", "File is required", (value) => {
        return value instanceof FileList ? value.length > 0 : !!value;
      }),
    budget_document: yup.mixed().nullable(), // Optional field
  });
  

export default Schema9