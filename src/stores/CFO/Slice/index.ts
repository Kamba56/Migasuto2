import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import CFOFormData from './type';

interface CFOState {
  loading: boolean;
  error: string | null;
}

const initialState: CFOState = {
  loading: false,
  error: null,
};

export const submitCFOForm = createAsyncThunk(
  'cfo/submitForm',
  async (formData: CFOFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://migasutoapi-production.up.railway.app/cfo/create', formData);
      
      if (response.status === 200) {
        console.log('Form submitted successfully:', response.data);
      }
      
      return response.data;
    } catch (error: any) {
      console.error("CFO Form Submission Error:", error);

      if (!error.response) {
        // Handle network errors (no response from server)
        return rejectWithValue("Network error. Please check your connection.");
      }

      return rejectWithValue(
        error.response.data?.message || 
        "An error occurred while submitting the form. Please try again."
      );
    }
  }
);

const cfoSlice = createSlice({
  name: 'cfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitCFOForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitCFOForm.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(submitCFOForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default cfoSlice.reducer;
