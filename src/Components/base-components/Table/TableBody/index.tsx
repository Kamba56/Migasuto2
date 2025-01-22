interface TableBodyProp {
    body: string;
}
export default function TableBody({body}: TableBodyProp) {
    return (
        <td className="sm:px-4">{body}</td>
    )
}