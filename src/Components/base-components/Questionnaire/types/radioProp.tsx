export default interface RadioProps {
    heading: string;
    options: {label: string, value:string}[];
    required?: boolean;
    register?: any;
    error?: string;
}