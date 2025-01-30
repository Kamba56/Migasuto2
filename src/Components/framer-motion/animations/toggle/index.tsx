import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const TOGGLE_CLASSES =
  "w-[135px] text-sm font-medium flex justify-center items-center gap-2 px-5 py-2 transition-colors relative z-10";

type ToggleOptionsType = "form" | "history";

const Example = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>("form");
  return (
    <div
      className={`grid bg-blue_fade w-fit py-1.5 place-content-center rounded-md px-2 transition-colors ${
        selected === "form" ? "" : ""
      }`}
    >
      <SliderToggle selected={selected} setSelected={setSelected} />
    </div>
  );
};

const SliderToggle = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionsType;
  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
}) => {
  return (
    <div className="relative flex w-fit">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "form" ? "text-white" : "text-gray"
        }`}
        onClick={() => {
          setSelected("form");
        }}
      >
        <span className="relative z-10">Form</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "history" ? "text-white" : "text-gray"
        }`}
        onClick={() => {
          setSelected("history");
        }}
      >
        <span className="relative z-10">History</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "history" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default Example;
