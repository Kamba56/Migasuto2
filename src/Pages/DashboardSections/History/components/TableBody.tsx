interface TableBodyProp {
    body: string;
}
export default function TableBody({body}: TableBodyProp) {
    return (
        <td className="px-4 ">{body}</td>
    )
}