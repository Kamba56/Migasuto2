import { useState } from "react";
import FormInputProps from "../types";

export default function MultipleInput({ title, placeholder, type }: FormInputProps) {
    const [values, setValues] = useState<string[]>([]);


    const handleAddValue = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
        event.preventDefault();
        const newValue = event.currentTarget.value.trim();
        if (newValue && !values.includes(newValue)) {
            setValues((prevValues) => [...prevValues, newValue])
            event.currentTarget.value = "";
        }
        }
    };

    const removeValue = (index: number) => {
        setValues((prevValues) => prevValues.filter((_, i) => i !== index));
    };

    return (
        <div>
        <label className="text-[16px]">
            {title} <span className="text-red-500">*</span>
        </label>

        {/* Input */}
        <div className="w-[280px] sm:w-[348px] p-4 border border-gray rounded-lg">
            <input
            type={type}
            placeholder={placeholder}
            onKeyDown={handleAddValue}
            className="w-full p-0 text-[13px] h-[21px] border-0 focus:ring-0"
            />
        </div>

        {/* Display Added Values */}
        <div className="flex flex-wrap gap-2 mt-2">
            {values.map((value, index) => (
            <div
                key={index}
                className="bg-blue_fade text-primary w-fit p-3 flex gap-4 items-center rounded-md"
            >
                <span>{value}</span>
                <button
                onClick={() => removeValue(index)}
                className="text-black font-bold"
                >
                X
                </button>
            </div>
            ))}
        </div>
        </div>
    );
}
