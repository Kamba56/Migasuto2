import axios from 'axios';
import { create } from 'zustand';
// Removed unused import as CFOFormData is not being used directly in the form

interface CFOUIState {
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const useCFOStore = create<CFOUIState>((set) => ({
  loading: false,
  error: null,
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export const submitCFOForm = async (formData: any) => {
  const response = await axios.post(
    'https://migasutoapi-production.up.railway.app/cfo/create',
    formData
  );
  return response.data;
};

export default useCFOStore;
