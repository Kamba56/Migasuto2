export default interface FormInputProps {
    title: string;
    placeholder: string;
    type: string;
    required?: boolean;
    register: any;
    error?: string;
}