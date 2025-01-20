import { RiArrowDropDownLine } from "react-icons/ri";

interface FilterItemProp {
    title: string;
    
}
export default function FilterItem({title}: FilterItemProp) {
    return (
        
        <div className="flex gap-2 border-x border-gray-200 px-2 md:px-4 lg:px-8
            justify-center items-center cursor-pointer">
            <h4>{title}</h4>
            <RiArrowDropDownLine 
                size={"24"}
            />
            
        </div>
    )
}