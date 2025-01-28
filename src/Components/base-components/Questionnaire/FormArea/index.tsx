interface FormTextProps {
    title: string;
    placeholder: string;
}

export default function FormArea({ title, placeholder }: FormTextProps) {
    return (
        <div className="w-[280px] sm:w-[348px] ">
            <label
                className="text-black text-[16px]"
                htmlFor="">{title} <span className="fottext-red-500">*</span></label>
            <div className=" p-4 border border-gray rounded-lg">
                <textarea className="w-full p-0 h-[169px] border-0 focus:ring-0"
                    placeholder={`${placeholder}`}
                    />
            </div>
        </div>
    )
}