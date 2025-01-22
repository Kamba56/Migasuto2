interface Status {
    status: "Completed" | "Processing" | "Rejected" | "On Hold" | "In Progress"
}
export default function Status({status}: Status){
    return (
        <div className={`${status === "Completed" ? "bg-[#00B69B2f] text-[#00B69B]"
            : status === "Processing" ? "bg-[#6226ef2f] text-[#6226ef]"
            : status === "In Progress" ? "bg-[#BA29FF2f] text-[#BA29FF]" 
            : status === "Rejected" ? "bg-[#ef38262f] text-[#ef3826]"
            : status === "On Hold" ? "bg-[#ffa7562f] text-[#ffa756]": ""}
            text-[13px] sm:text-[16px] sm:font-semibold w-full sm:w-[125px] py-2 text-center rounded-md`}>
            {status}

        </div>
    )
}