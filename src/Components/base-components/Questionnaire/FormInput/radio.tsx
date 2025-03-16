import RadioProp from '../types/radioProp'
export default function RadioField({heading, options, required, name, register, error}: RadioProp) {
    return (
        <div className='w-[280px] sm:w-[348px] flex flex-col gap-1'>
            <label className="text-[16px] font-medium">{heading}</label>

            <div className='flex flex-col gap-2'>
                {options.map((option) => (
                    <div className='flex gap-2 items-center' key={option.value}>
                        
                        <input required={required} {...register(name)} type="radio" id={option.value} value={option.value} />
                        <label htmlFor="">{option.label}</label>
                    </div>
                ))}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    )
}