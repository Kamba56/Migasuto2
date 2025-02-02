import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const TOGGLE_CLASSES =
  "w-[135px] text-sm flex justify-center items-center gap-2 px-5 py-2 transition-colors relative z-10";

type ToggleOptionsType = "Form" | "Feedback";

const HistoryToggle = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>("Form");
  return (
    <div
      className={`grid bg-blue_fade w-fit p-[3px] place-content-center rounded-md transition-colors ${
        selected === "Form" ? "" : ""
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
          selected === "Form" ? "text-white" : "text-gray"
        }`}
        onClick={() => {
          setSelected("Form");
        }}
      >
        <span className="relative z-10">Form</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "Feedback" ? "text-white" : "text-gray"
        }`}
        onClick={() => {
          setSelected("Feedback");
        }}
      >
        <span className="relative z-10">Feedback</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "Feedback" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-md bg-gradient-to-r bg-primary "
        />
      </div>
    </div>
  );
};

export default HistoryToggle;
