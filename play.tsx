import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Hardcoded data for demonstration purposes
const hardcodedStats = [
  { title: "New Tickets", value: 43, change: 6, suffix: "" },
  { title: "Closed Today", value: 17, change: -3, suffix: "" },
  { title: "New Replies", value: 7, change: 9, suffix: "" },
  { title: "Followers", value: 27300, change: 3, suffix: "" },
  { title: "Daily Earnings", value: 95, change: -2, suffix: "$" },
  { title: "Products", value: 621, change: -1, suffix: "" },
];

const hardcodedTableData = [
  { user: "Ronald Bradly", commit: "Initial Commit", date: "May 6, 2018" },
  { user: "Russell Gibson", commit: "Main Structure", date: "April 22, 2018" },
  { user: "Beverly Armstrong", commit: "Sidebar Adjustments", date: "April 15, 2018" },
];

const hardcodedDonutData = [
  { name: "Segment 1", value: 37 },
  { name: "Segment 2", value: 63 },
];

const hardcodedPieData = [
  { name: "Segment 1", value: 47.4 },
  { name: "Segment 2", value: 33.1 },
  { name: "Segment 3", value: 10.9 },
  { name: "Segment 4", value: 9.0 },
];

const hardcodedLineData = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 12 },
  { name: "Apr", value: 25 },
  { name: "May", value: 20 },
  { name: "Jun", value: 30 },
];

const DONUT_COLORS = ["#4CAF50", "#81C784"];
const PIE_COLORS = ["#1E40AF", "#3B82F6", "#93C5FD", "#DBEAFE"];

const Dashboard = () => {
  const StatsCard = ({ title, value, change, suffix = "" }) => {
    const isPositive = change > 0;
    return (
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-sm">
        <div className="flex justify-end items-end mb-2">
          <span
            className={`text-sm font-semibold ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? `+${change}%` : `${change}%`}
          </span>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="text-3xl font-semibold mb-2">
            {suffix}
            {value}
          </div>
          <div className="text-gray-500 font-medium text-sm">{title}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      <Navigation />

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
          {hardcodedStats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              suffix={stat.suffix || ""}
            />
          ))}
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Line Chart for Development Activity */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Development Activity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={hardcodedLineData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Donut Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Donut Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={hardcodedDonutData}
                  innerRadius="60%"
                  outerRadius="80%"
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                >
                  {hardcodedDonutData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={DONUT_COLORS[index % DONUT_COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Pie Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={hardcodedPieData}
                  outerRadius="80%"
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                >
                  {hardcodedPieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
