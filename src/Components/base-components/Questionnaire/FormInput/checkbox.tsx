import CheckboxProp from "../types/checkboxProp";

const CheckboxField = ({ heading, options }: CheckboxProp) => {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-[16px] font-medium">{heading}</h3>
            <div className="flex flex-col gap-4">
                
            {options.map(option => (
                <label key={option.value} className="flex gap-3 items-center">
                    <input type="checkbox" value={option.value} />
                    {option.label}
                </label>
            ))}
            </div>
        </div>
    );
}

export default CheckboxField