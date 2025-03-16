export default interface RadioProps {
    heading: string;
    options: {label: string, value:string}[];
    required?: boolean;
    name: string;
    register: any;
    error?: string;
}