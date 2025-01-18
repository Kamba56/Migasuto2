import FilterItem from "./FilterItem"
import { MdOutlineReplay } from "react-icons/md";
import Filter from "../../../../assets/icons/Filter.svg"
export default function FilterBar (){
    return (
        <div className="flex bg-white h-16 w-fit rounded-lg font-semibold">
            <img src={Filter}
                className="pl-4"/>
            <h1 className=" flex px-8 justify-center items-center">Filter By</h1>
            <FilterItem 
                title="Date"
            />
            
            <FilterItem 
                title="Order Type"
            />
            
            <FilterItem 
                title="Order Status"
            />
            <h1 className="border-x text-red-500 border-gray-200 flex gap-2 px-8 justify-center items-center"
                >
                <MdOutlineReplay color=""/>
                Reset Filter
            </h1>
            
        </div>
    )
}