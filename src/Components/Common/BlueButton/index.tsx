const BlueButton = (props: {
  btnName: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "button" | "submit";
}) => {
  const { btnName, type, onClick } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex justify-center w-full items-center gap-3 px-8 py-2 text-base font-medium cursor-pointer text-white bg-blue-10 rounded-lg"
    >
      <p>{btnName}</p>
    </button>
  );
};

export default BlueButton;
