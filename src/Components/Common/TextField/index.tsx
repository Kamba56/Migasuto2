const TextField = (props: { fieldName: string, placeholder: string, type: string, required: boolean }) => {
  const { fieldName, placeholder, type, required } = props;

  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium text-base">{fieldName} {required && (<span className="text-red-10">*</span>)}</p>
      <input type={type} placeholder={placeholder} className="border rounded-lg px-4 py-2 border-blue-30 focus:shadow-lg focus:outline-none placeholder:text-grey-20" />
    </div>
  )
}

export default TextField;
