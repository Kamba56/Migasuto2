// api/cfoApi.ts
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useCFOStore } from '../../stores/CFO';
import CFOFormData from '../../types/cfo';

const submitCFOForm = async (formData: CFOFormData) => {
  const response = await axios.post('https://migasutoapi-production.up.railway.app/cfo/create', formData);
  return response.data;
};

export const useSubmitCFOForm = () => {
  const { setLoading, setError } = useCFOStore();

  return useMutation(submitCFOForm, {
    onMutate: () => {
      setLoading(true);
      setError(null);
    },
    onSuccess: (data) => {
      console.log('Form submitted successfully:', data);
    },
    onError: (error: any) => {
      console.error('Submission error:', error);
      setError('An error occurred while submitting the form.');
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};
