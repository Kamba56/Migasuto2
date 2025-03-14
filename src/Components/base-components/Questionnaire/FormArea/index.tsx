interface FormTextProps {
    title: string;
    placeholder: string;
    register?: any;
    error?: string;
    required?: boolean
}

export default function FormArea({ title, placeholder, register, error, required }: FormTextProps) {
    return (
        <div className="w-[280px] sm:w-[348px] flex flex-col gap-1 ">
            <label
                className="text-black text-[16px] font-medium"
                htmlFor="">{title} {required && <span className="text-red-500">*</span>}
            </label>
            <div className={`${error ? 'border-red-10': ''}  p-4 border-[2px] rounded-lg`}>
                <textarea className={` resize-none w-full p-0 h-[169px] border-0 focus:ring-0 focus:outline-none`}
                    placeholder={`${placeholder}`}
                    {...register}
                    
                    />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

        </div>
    )
}