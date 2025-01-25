interface TableHeaderProp {
    header: string;
}

export default function TableHeader({ header }: TableHeaderProp) {
    return (
        <th className="font-semibold px-4 py-2">{header}</th>
    );
}