import CategoryLayout from "../../Components/CategoryLayout.js"
import FilterBar from "../../Components/base-components/Filter/FilterBar/index.js"
import Status from "../../Components/base-components/Table/status.js"
import TableBody from "../../Components/base-components/Table/TableBody/index.js"
import TableHeader from "../../Components/base-components/Table/TableHead/index.js"
import TableData from "../../Data/TableData.js"

export default function History(){
    return(
        <CategoryLayout
            organization="Migasuto Team"
            category="Questionnaire History">
            <FilterBar />
            <table className=" bg-white px-8 rounded-xl py-5">
                <thead>
                    <tr className="grid grid-cols-6 text-left px-4 py-2 border-b border-gray-300">
                        <TableHeader 
                            header="Form ID"/>
                        <TableHeader 
                            header="Form Title"/>
                        <TableHeader 
                            header="Feedback"/>
                        <TableHeader 
                            header="Date"/>
                        <TableHeader 
                            header="Type"/>
                        <TableHeader 
                            header="Status"/>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 ">
                    {TableData.map((table, index) => (
                        <tr className="grid grid-cols-6 items-center px-3 pt-5 pb-2">
                            <TableBody
                                key={index}
                                body={table.id}/>
                            <TableBody
                                key={index}
                                body={table.title}/>
                            <TableBody
                                key={index}
                                body={table.feedback}/>
                            <TableBody
                                key={index}
                                body={table.date}/>
                            <TableBody
                                key={index}
                                body={table.type}/>
                            <td className="flex items-center sm:px-4 w-full">
                                <Status
                                    status={table.status}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            

        </CategoryLayout>
    )
}