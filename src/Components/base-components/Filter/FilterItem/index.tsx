import { useState } from "react";
import { motion } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri";
import wrapperVariants from "../../../framer-motion/variants/WrapperVariant";
import iconVariants from "../../../framer-motion/variants/IconVariant";
import FilterOption from "./FilterOption";



function FilterItem({ title, items }: { title: string, items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <motion.div
      onClick={() => setIsOpen((prev) => !prev)}
      animate={isOpen ? "open" : "closed"}
      className="relative flex gap-2 border px-8 items-center cursor-pointer"
    >
      <button type="button" className="flex items-center gap-2">
        <h4>{title}</h4>
        <motion.span animate={isOpen ? "open" : "closed"} variants={iconVariants}>
          <RiArrowDropDownLine size={24} />
        </motion.span>
      </button>
      <motion.ul
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={wrapperVariants}
        className="absolute top-full left-0 w-full overflow-hidden bg-gray-100 shadow-lg rounded-md"
      >
        
        <FilterOption
            
            items={items}
            setOpen={setIsOpen}
        />
        
        </motion.ul>
    </motion.div>
    );
}


export default FilterItem;