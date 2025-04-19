// stores/cfoStore.ts
import { create } from 'zustand';

interface CFOUIState {
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useCFOStore = create<CFOUIState>((set) => ({
  loading: false,
  error: null,
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
}));


