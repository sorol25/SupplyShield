import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AnalyticsChart() {
  const data = [
    { name: "Mon", shipments: 40 },
    { name: "Tue", shipments: 55 },
    { name: "Wed", shipments: 70 },
    { name: "Thu", shipments: 90 },
    { name: "Fri", shipments: 120 },
    { name: "Sat", shipments: 150 },
  ];

  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10 mt-10">
      <h2 className="text-xl font-semibold mb-4">Shipment Analytics</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="shipments" stroke="#6366F1" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;
