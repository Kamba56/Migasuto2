const GreyButton = (props: { btnName: string }) => {
  const { btnName } = props;
  return (
    <button type="button" className="flex justify-center w-full items-center gap-3 px-8 py-2 text-base font-medium cursor-pointer text-grey-20 bg-grey-10 rounded-lg">
      <p>{btnName}</p>
    </button>
  )
}

export default GreyButton
