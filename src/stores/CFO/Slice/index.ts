import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://migasutoapi-production.up.railway.app/cfo/create', formData);
      if (response.status === 200) {
        console.log('Response is okay:', response.data);
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
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
        state.error = typeof action.payload === 'string' ? action.payload : JSON.stringify(action.payload);
      });
  },
});

export default cfoSlice.reducer;