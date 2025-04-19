// hooks/useSubmitCFOForm.ts
import { useMutation } from '@tanstack/react-query';
import { submitCFOForm } from './CFO/Slice';
import useCFOStore from './CFO/Slice';

export const useSubmitCFOForm = () => {
  const { setLoading, setError } = useCFOStore();

  return useMutation({
    mutationFn: submitCFOForm,
    onMutate: () => {
      setLoading(true);
      setError(null);
    },
    onSuccess: (data: any) => {
      console.log('Form submitted successfully:', data);
    },
    onError: (error: any) => {
      console.error('Submission error:', error);

      if (!error.response) {
        setError('Network error. Please check your connection.');
      } else {
        setError(
          error.response.data?.message ||
            'An error occurred while submitting the form.'
        );
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export default useSubmitCFOForm