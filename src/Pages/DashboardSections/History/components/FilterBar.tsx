import FilterItem from "./FilterItem"
import { IoRefreshCircle } from "react-icons/io5"
export default function FilterBar (){
    return (
        <div className="flex bg-white h-16 w-fit rounded-lg">
            <h1 className="border-x border-gray-200 flex px-8 justify-center items-center">Filter By</h1>
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
                <IoRefreshCircle color=""/>
                Reset Filter
            </h1>
            
        </div>
    )
}