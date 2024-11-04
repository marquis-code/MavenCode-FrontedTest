import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
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

// Hardcoded data for demonstration purposes
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

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      <Navigation />

      <main className="p-6">
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Development Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hardcodedLineData}>
              {/* Adding shaded area below the line */}
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
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
              />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
