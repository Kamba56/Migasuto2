import * as yup from "yup";
const Schema9 = yup.object().shape({
    bank_statement: yup.mixed().nullable(),
    cash_flow_statement: yup.mixed().nullable(),
    budget_document: yup.mixed().nullable()
  });
  

export default Schema9