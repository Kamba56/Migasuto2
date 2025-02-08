import { motion } from "framer-motion";

export default function FilterOption({
    items, setOpen
    }: 
    {
        items: string[], setOpen: React.Dispatch<React.SetStateAction<boolean>>
    }) {
    return (
      <>
      
        {items.map((item, index) => (
          
          <motion.div
            key={index}
            onClick={() => setOpen(false)}
            variants={itemVariants}
            className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer">
            <span>{item}</span>
          </motion.div>
        ))}
      </>
    );

}



  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
