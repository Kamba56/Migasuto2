import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface CFOFormData {
  userId: number;
  name: string;
  country: string;
  inspiration: string;
  product: string;
  solution: string;
  advantage: string;
  envision: string;
  goals: string;
  business_model: string;
  revenue_stream: string;
  pricing: string;
  startup_cost: number;
  expenditure: number;
  profitability: number;
  capital: number;
  investor?: string;
  self_funding: boolean;
  capital_invest: number;
  capital_raised: number;
  projected_needs: string;
  hiring: string;
  job_hire: string;
  sale_target: string;
  marketing: string;
  risk: string;
  compliance_concern: string;
  financial_metrics: string;
  cash_flow_time: string;
  bank_statement?: File[];
  cash_flow_statement?: File[];
  budget_document?: File[];
}

interface CFOState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: CFOState = {
  loading: false,
  error: null,
  success: false,
};

export const submitForm = createAsyncThunk(
  "cfo/submitForm",
  async (formData: CFOFormData, { rejectWithValue }) => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        const formKey = key as keyof CFOFormData;
        if (Array.isArray(formData[formKey])) {
          (formData[formKey] as File[]).forEach((file: File) => {
            data.append(key, file);
          });
        } else {
          data.append(key, formData[formKey] as string | Blob);
        }
      });

      const response = await axios.post("https://migasutoapi-production.up.railway.app/cfo/create", data, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const cfoSlice = createSlice({
  name: "cfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default cfoSlice.reducer;