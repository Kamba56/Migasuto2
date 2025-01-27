import FilterItem from "../FilterItem"
import { MdOutlineReplay } from "react-icons/md";
import Filter from "../../../../assets/icons/Filter.svg"
export default function FilterBar (){
    return (
        <div className="flex bg-white h-16 w-fit rounded-lg
            text-[11px] md:text-[14px] font-semibold">
            <img src={Filter}
                className="pl-4"/>
            <h1 className=" flex px-8 justify-center items-center">Filter By</h1>
            <FilterItem 
                title="Date"
                items={["Today", "Yesterday", "Last 7 days", "Last 30 days"]}
            />
            
            <FilterItem 
                title="Order Type"
                items={["Completed", "Cancelled"]}
            />
            
            <FilterItem 
                title="Order Status"
                items={["All", "Pending", "Completed", "Cancelled"]}
            />
            <button className="border-x text-red-500 border-gray-200 flex gap-2 px-8 justify-center items-center"
                >
                <MdOutlineReplay color=""/>
                Reset Filter
            </button>
            
        </div>
    )
}