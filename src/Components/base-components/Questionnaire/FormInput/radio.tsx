import RadioProp from '../types/radioProp'
export default function RadioField({heading, options}: RadioProp) {
    return (
        <div className='flex flex-col gap-1'>
            <label className="text-[16px] font-medium">{heading}</label>

            <div className='flex flex-col gap-2'>
                {options.map((option, index) => (
                    <div className='flex gap-2 items-center' key={index}>
                        
                        <input type="radio" name="" value={option.value} />
                        <label htmlFor="">{option.label}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}