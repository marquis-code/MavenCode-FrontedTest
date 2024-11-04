import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Area,
} from "recharts";

// Hardcoded data for demonstration
const hardcodedLineData = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 12 },
  { name: "Apr", value: 25 },
  { name: "May", value: 20 },
  { name: "Jun", value: 30 },
  { name: "Jul", value: 35 },
  { name: "Aug", value: 40 },
];

const DevelopmentActivityChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Development Activity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={hardcodedLineData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          {/* Adding shaded area below the line */}
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            fill="url(#colorValue)"
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={false} // Remove dots for a cleaner line
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: "rgba(59, 130, 246, 0.1)" }} />
          <Legend iconType="square" layout="horizontal" verticalAlign="top" align="left" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DevelopmentActivityChart;
