import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../store/dashboardSlice";
import Header from "./Header";
import Navigation from "./Navigation";
import DocumentationCard from "./DocumentationCard";
import { RootState } from "../store/store";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

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

const DONUT_COLORS = ["#4CAF50", "#E8F5E9"];
const PIE_COLORS = ["#1E40AF", "#3B82F6", "#93C5FD", "#DBEAFE"];

const Dashboard = () => {
  const dispatch = useDispatch();
  const { stats, tableData, donutData, pieData, loading } = useSelector(
    (state: RootState) => state.dashboard
  );

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

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

      <main className="p-6 bg-[#f4f6f8]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              suffix={stat.suffix || ""}
            />
          ))}
        </div>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <section>
            <div className="bg-white shadow-sm">
              <h3 className="text-lg px-6 py-4 font-semibold text-gray-700 mb-4 border-b border-gray-400">
                Development Activity
              </h3>
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

            <div className="bg-white p-6 ">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-gray-900">
                        User
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-900">
                        Commit
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-900">
                        Date
                      </th>
                      <th className="px-4 py-2 sr-only text-left font-semibold text-gray-900">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tableData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            {item.avatar ? (
                              <img
                                src={item.avatar}
                                alt="avatar"
                                className="w-10 h-10 rounded-full"
                              />
                            ) : (
                              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                {item.user[0]}
                              </div>
                            )}
                            <span className="ml-4 text-gray-900">
                              {item.user}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-2 text-gray-900">
                          {item.commit}
                        </td>
                        <td className="px-4 py-2 text-gray-900">{item.date}</td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

       <section className="space-y-6">
         <DocumentationCard />
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-lg bg-white shadow-sm">
              <h3 className="text- font-semibold text-gray-700 px-6 py-4 mb-4 border-b border-gray-400">
               Chart title
              </h3>
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

            <div className="rounded-lg bg-white shadow-sm">
              <h3 className="text- font-semibold text-gray-700 px-6 py-4 mb-4 border-b border-gray-400">
              Chart title
              </h3>
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

            <div className="rounded-lg bg-white shadow-sm">
              <h3 className="text- font-semibold text-center text-gray-700 px-6 py-4 mb-4 border-b border-gray-400">
                New Feedback
              </h3>
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
              {/* <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={donutData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {donutData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={DONUT_COLORS[index % DONUT_COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer> */}
            </div>

            <div className="rounded-lg bg-white shadow-sm">
              <h3 className="text- font-semibold text-center text-gray-700 px-6 py-4 mb-4 border-b border-gray-400">
                Today Profit
              </h3>
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
              {/* <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={donutData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {donutData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={DONUT_COLORS[index % DONUT_COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer> */}
            </div>
          </div>
       </section>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
