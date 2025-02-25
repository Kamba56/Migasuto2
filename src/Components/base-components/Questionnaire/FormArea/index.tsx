interface FormTextProps {
    title: string;
    placeholder: string;
}

export default function FormArea({ title, placeholder }: FormTextProps) {
    return (
        <div className="w-[280px] sm:w-[348px] flex flex-col gap-1 ">
            <label
                className="text-black text-[16px] font-medium"
                htmlFor="">{title} <span className="text-red-500">*</span>
            </label>
            <div className=" p-4 border border-gray rounded-lg">
                <textarea className="resize-none w-full p-0 h-[169px] border-0 focus:ring-0"
                    placeholder={`${placeholder}`}
                    />
            </div>
        </div>
    )
}