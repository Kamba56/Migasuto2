import FormInputProps from "../types";

export default function FormInput({ title, placeholder, type, }: FormInputProps) {
    return (
        <div className="w-[280px]">
            <label
                className="text-[16px] font-medium"
                htmlFor="">{title} <span className="text-red-500">*</span></label>
            <div className="w-[280px] sm:w-[348px] p-4 border border-gray rounded-lg">
                <input className="w-full p-0 text-[13px] h-[21px] border-0 focus:ring-0"
                    placeholder={`${placeholder}`}
                    type={`${type}`}/>
            </div>
        </div>
    )
}