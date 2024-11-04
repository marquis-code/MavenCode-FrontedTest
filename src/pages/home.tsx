import React from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Data for the first donut chart (green)
const donutData1 = [
  { name: "Segment 1", value: 37 },
  { name: "Segment 2", value: 63 },
];

const tableData = [
  {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    user: "Ronald Bradly",
    commit: "Initial Commit",
    date: "May 6, 2018",
  },
  {
    avatar: "",
    user: "Russell Gibson",
    commit: "Main Structure",
    date: "April 22, 2018",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    user: "Beverly Armstrong",
    commit: "Left sidebar adjustments",
    date: "April 15, 2018",
  },
];

const getInitials = (username: string) => {
  return `${username.split(" ")[0][0]}${username.split(" ")[1][0]}`;
};

// Data for the second pie chart (blue)
const pieData = [
  { name: "Segment 1", value: 47.4 },
  { name: "Segment 2", value: 33.1 },
  { name: "Segment 3", value: 10.9 },
  { name: "Segment 4", value: 9.0 },
];

// Colors for the charts
const DONUT_COLORS = ["#4CAF50", "#E8F5E9"];
const PIE_COLORS = ["#1E40AF", "#3B82F6", "#93C5FD", "#DBEAFE"];

const purchaseData = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 12 },
  { name: "Apr", value: 25 },
  { name: "May", value: 20 },
  { name: "Jun", value: 30 },
];

const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-sm">
    <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-400 px-6 py-4">{title}</h3>
    <div className="h-64 flex items-center justify-center p-6 ">{children}</div>
  </div>
);

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

const Navigation = () => (
  <nav className="bg-white border-b p-4 overflow-x-auto">
    <div className="flex items-center space-x-6 text-gray-500 min-w-max">
      <Link to="/" className="text-blue-600 border-b-2 border-blue-600 flex items-center gap-x-1.5">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        Home
      </Link>
      <Link to="/" className="hover:text-blue-600 flex items-center gap-x-1.5">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
        Interface
      </Link>
      <Link to="/" className="hover:text-blue-600 flex items-center gap-x-1.5">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        Components
      </Link>
      <Link to="/" className="hover:text-blue-600 flex items-center gap-x-1.5">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z"/><path d="M13 3v6h6"/></svg>
        Pages
      </Link>
      <Link to="/" className="hover:text-blue-600 flex items-center gap-x-1.5">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
        Forms
      </Link>
      <Link to="/" className="hover:text-blue-600 flex items-center gap-x-1.5">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M20.4 14.5L16 10 4 20"/></svg>
        Gallery
      </Link>
      <Link to="/" className="hover:text-blue-600 flex items-center gap-x-1.5">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
        Documentation
      </Link>
    </div>
  </nav>
);

const Header = () => (
  <header className="bg-white border-b p-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="bg-[#206BC4] rounded-lg p-2 flex items-center justify-center w-10 h-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <span className="text-2xl font-normal text-[#1A1D1F]">tabler</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-50 border border-blue-600 font-semibold text-blue-600 px-4 py-2 rounded">
          Source code
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
        </svg>
        <div className="flex items-center space-x-2 text-gray-800">
          <img
            className="inline-block h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          ></img>
          <div className="text-sm">
            <div className="font-semibold text-gray-900 text-lg">
              Jane Pearson
            </div>
            <div>Administrator</div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const ActivityChart = () => (
  <div className="bg-white p-6  shadow-sm">
    <h3 className="text-lg font-semibold mb-4">Development Activity</h3>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={purchaseData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      <Navigation />

      <main className="p-6">
        <h1 className="text-2xl text-gray-800 font-medium mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
          <StatsCard title="New Tickets" value="43" change={6} />
          <StatsCard title="Closed Today" value="17" change={-3} />
          <StatsCard title="New Replies" value="7" change={9} />
          <StatsCard title="Followers" value="27.3k" change={3} />
          <StatsCard title="Daily earnings" value="95" change={-2} suffix="$" />
          <StatsCard title="Products" value="621" change={-1} />
        </div>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-lg bg-white">
            <div className="text-gray-900 text-start border-b border-gray-600 py-4">
              <p className="pl-6 text-xl font-medium">Development Activity</p>
            </div>

            <ActivityChart />

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="whitespace-nowrap text-start px-4 py-4 font-semibold text-gray-900">
                      USER
                    </th>
                    <th className="whitespace-nowrap text-start px-4 py-4 font-semibold text-gray-900">
                      COMMIT
                    </th>
                    <th className="whitespace-nowrap text-start px-4 py-4 font-semibold text-gray-900">
                      DATE
                    </th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {tableData.map((item) => (
                    <tr>
                      <td className="whitespace-nowrap text-start px-4 py-6 font-medium text-gray-900">
                        <div className="flex items-center gap-x-2">
                          {item.avatar ? (
                            <img
                              src={item.avatar}
                              className="h-10 w-10 rounded-full"
                            />
                          ) : (
                            <p className="h-10 w-10 rounded-full bg-gray-100 text-gray-900 font-semibold uppercase flex justify-center items-center">
                              {getInitials(item.user)}
                            </p>
                          )}
                          {item.user}
                        </div>
                      </td>
                      <td className="whitespace-nowrap text-start px-4 py-6 text-gray-700">
                        {item.commit}
                      </td>
                      <td className="whitespace-nowrap text-start px-4 py-6 text-gray-700">
                        {item.date}
                      </td>
                      <td className="whitespace-nowrap px-4 py-6">
                        <button className="inline-block px-4 py-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-400 text-start p-4  rounded-md">
              <p className="text-gray-500">
                <span className="font-semibold text-gray-900">Read our documentation</span>{" "}
                with code examples
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              <div className=" rounded-lg bg-white">
                <ChartCard title="Chart title">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={donutData1}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {donutData1.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={DONUT_COLORS[index % DONUT_COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>
              <div className=" rounded-lg bg-white">
                <ChartCard title="New feedback">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={donutData1}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {donutData1.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={DONUT_COLORS[index % DONUT_COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>
              <div className=" rounded-lg bg-white">
                <ChartCard title="Today profit">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={pieData}
                        innerRadius={0}
                        outerRadius={80}
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={PIE_COLORS[index % PIE_COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>
              <div className=" rounded-lg bg-white">
                <ChartCard title="Today profit">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={pieData}
                        innerRadius={0}
                        outerRadius={80}
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={PIE_COLORS[index % PIE_COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../store/dashboardSlice";
import { RootState } from "../store/store";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DONUT_COLORS = ["#4CAF50", "#E8F5E9"];
const PIE_COLORS = ["#1E40AF", "#3B82F6", "#93C5FD", "#DBEAFE"];

const Dashboard = () => {
  const dispatch = useDispatch();
  const { stats, tableData, donutData, pieData, loading } = useSelector((state: RootState) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <header className="bg-white border-b p-4">
        <h1 className="text-2xl text-gray-800 font-medium mb-6">Dashboard</h1>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white text-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-semibold mb-2">
                {stat.suffix}
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium text-sm">{stat.title}</div>
            </div>
          ))}
        </div>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-400">Development Activity</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={tableData}>
                <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-400">Today Profit</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
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
