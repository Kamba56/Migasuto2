interface TableRow {
  id: string;
  title: string;
  feedback: string;
  date: string;
  type: string;
  status: "Completed" | "Processing" | "Rejected" | "On Hold" | "In Progress";
}

// TableData Array
const TableData: TableRow[] = [
  {
    id: "001",
    title: "Christine Brooks",
    feedback: "Kucth green aprt",
    date: "14 Sept 2024",
    type: "Book",
    status: "Completed",
  },
  {
    id: "002",
    title: "Michael Smith",
    feedback: "Downtown Villas",
    date: "15 Sept 2024",
    type: "Electric",
    status: "Processing",
  },
  {
    id: "003",
    title: "Jessica Taylor",
    feedback: "Uptown Heights",
    date: "16 Sept 2024",
    type: "Mobile",
    status: "Rejected",
  },
  {
    id: "004",
    title: "David Brown",
    feedback: "Suburban Residences",
    date: "17 Sept 2024",
    type: "Medicine",
    status: "On Hold",
  },
  {
    id: "005",
    title: "Joshua Paul",
    feedback: "Brickle",
    date: "18 Sept 2024",
    type: "Mobile",
    status: "In Progress",
  },
];

export default TableData