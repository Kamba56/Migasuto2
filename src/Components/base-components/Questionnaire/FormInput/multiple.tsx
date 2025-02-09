import { useState } from "react";
import Cross from "../../../../assets/icons/Cross.svg";

export default function MultipleInput(){
    const [values, setValues] = useState<string[]>([
        'Promise kept',
        'Goal focused',
        'Swift speed',
        'Speed upgrade'
    ]);


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
        <div className="">
            <label className="text-[16px] font-medium">
                What are your core values <span className="text-red-500">*</span>
            </label>

            <div className="w-[280px] sm:w-[348px] p-4 border border-gray rounded-lg">
                <input
                type="text"
                placeholder="Enter your core values, press enter to add"
                onKeyDown={handleAddValue}
                className="w-full p-0 text-[13px] h-[21px] border-0 focus:ring-0"
                />
            </div>

            {/* Display Added Values */}
            <div className="flex max-w-[340px] flex-wrap gap-2 mt-2">
                {values.map((value, index) => (
                <div
                    key={index}
                    className="bg-blue_fade text-primary w-fit p-[10px] flex gap-[10px] items-center rounded-md"
                >
                    <span className="text-[14px]">{value}</span>
                    <button
                    onClick={() => removeValue(index)}
                    className="text-black font-bold"
                    >
                        <img src={Cross} alt="cross" />
                    </button>
                </div>
                ))}
            </div>
        </div>
    );
}
