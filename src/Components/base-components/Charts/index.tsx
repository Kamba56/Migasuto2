import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const pieData1 = [
  { name: "24 weeks", value: 54, color: "#4CAF50" },
  { name: "Above 24 Weeks", value: 46, color: "#A6D388" },
];

const pieData2 = [
  { name: "Partner", value: 20, color: "#F44336" },
  { name: "Relative", value: 22, color: "#4CAF50" },
  { name: "Alone 3", value: 12, color: "#FFC107" },
  { name: "Friend", value: 26, color: "#FF9800" },
  { name: "Others 5", value: 20, color: "#FF5722" },
];

export default function MetricChart() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {/* Pie Chart 1 */}
      <div className="shadow-lg p-4 rounded-lg bg-white">
        <h3 className="text-lg font-semibold">Title</h3>
        <p className="text-gray-500">Short Description</p>
        <PieChart width={250} height={250}>
          <Pie
            data={pieData1}
            cx="50%"
            cy="50%"
            dataKey="value"
          >
            {pieData1.map((entry, index) => (
              <Cell className="flex" key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Pie Chart 2 */}
      <div className="shadow-lg p-4 rounded-lg bg-white">
        <h3 className="text-lg font-semibold">Title</h3>
        <p className="text-gray-500">Short Description</p>
        <PieChart width={250} height={250}>
          <Pie
            data={pieData2}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
          >
            {pieData2.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Doughnut Chart */}
      <div className="shadow-lg p-4 rounded-lg bg-white">
        <h3 className="text-lg font-semibold">Title</h3>
        <p className="text-gray-500">Short Description</p>
        <PieChart width={250} height={250}>
          <Pie
            data={pieData2}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            dataKey="value"
          >
            {pieData2.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}
