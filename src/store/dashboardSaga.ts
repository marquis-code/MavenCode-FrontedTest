// import { call, put, takeEvery } from 'redux-saga/effects';
// import { setStats, setTableData, setDonutData, setPieData, setLoading, fetchDashboardData } from '../store/dashboardSlice';
// import { Stat, TableRow, ChartData } from '../types/dashboardTypes';

// // Mocked API data fetching functions
// const fetchStats = (): Promise<Stat[]> => Promise.resolve([
//   { title: "New Tickets", value: 43, change: 6 },
//   { title: "Closed Today", value: 17, change: -3 },
//   { title: "New Replies", value: 7, change: 9 },
//   { title: "Followers", value: "27.3k", change: 3 },
//   { title: "Daily earnings", value: 95, change: -2, suffix: "$" },
//   { title: "Products", value: 621, change: -1 },
// ]);

// const fetchTableData = (): Promise<TableRow[]> => Promise.resolve([
//   { avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e", user: "Ronald Bradly", commit: "Initial Commit", date: "May 6, 2018" },
//   { avatar: "", user: "Russell Gibson", commit: "Main Structure", date: "April 22, 2018" },
//   { avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e", user: "Beverly Armstrong", commit: "Left sidebar adjustments", date: "April 15, 2018" },
// ]);

// const fetchDonutData = (): Promise<ChartData[]> => Promise.resolve([
//   { name: "Segment 1", value: 37 },
//   { name: "Segment 2", value: 63 },
// ]);

// const fetchPieData = (): Promise<ChartData[]> => Promise.resolve([
//   { name: "Segment 1", value: 47.4 },
//   { name: "Segment 2", value: 33.1 },
//   { name: "Segment 3", value: 10.9 },
//   { name: "Segment 4", value: 9.0 },
// ]);

// function* handleFetchDashboardData() {
//   try {
//     yield put(setLoading(true));
    
//     const stats: Stat[] = yield call(fetchStats);
//     yield put(setStats(stats));

//     const tableData: TableRow[] = yield call(fetchTableData);
//     yield put(setTableData(tableData));

//     const donutData: ChartData[] = yield call(fetchDonutData);
//     yield put(setDonutData(donutData));

//     const pieData: ChartData[] = yield call(fetchPieData);
//     yield put(setPieData(pieData));

//     yield put(setLoading(false));
//   } catch (error) {
//     console.error("Error fetching dashboard data", error);
//     yield put(setLoading(false));
//   }
// }

// export default function* dashboardSaga() {
//   yield takeEvery(fetchDashboardData.type, handleFetchDashboardData);
// }

import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchDashboardData, setStats, setTableData, setDonutData, setPieData, setLoading } from './dashboardSlice';
import { Stat, TableRow, ChartData } from '../types/dashboardTypes';

// Mocked API data fetching functions
const fetchStats = (): Promise<Stat[]> => Promise.resolve([
  { title: "New Tickets", value: 43, change: 6 },
  { title: "Closed Today", value: 17, change: -3 },
  { title: "New Replies", value: 7, change: 9 },
  { title: "Followers", value: "27.3k", change: 3 },
  { title: "Daily earnings", value: 95, change: -2, suffix: "$" },
  { title: "Products", value: 621, change: -1 },
]);

const fetchTableData = (): Promise<TableRow[]> => Promise.resolve([
  { avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e", user: "Ronald Bradly", commit: "Initial Commit", date: "May 6, 2018" },
  { avatar: "", user: "Russell Gibson", commit: "Main Structure", date: "April 22, 2018" },
  { avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e", user: "Beverly Armstrong", commit: "Left sidebar adjustments", date: "April 15, 2018" },
]);

const fetchDonutData = (): Promise<ChartData[]> => Promise.resolve([
  { name: "Segment 1", value: 37 },
  { name: "Segment 2", value: 63 },
]);

const fetchPieData = (): Promise<ChartData[]> => Promise.resolve([
  { name: "Segment 1", value: 47.4 },
  { name: "Segment 2", value: 33.1 },
  { name: "Segment 3", value: 10.9 },
  { name: "Segment 4", value: 9.0 },
]);

function* handleFetchDashboardData() {
  try {
    yield put(setLoading(true));
    
    const stats: Stat[] = yield call(fetchStats);
    yield put(setStats(stats));

    const tableData: TableRow[] = yield call(fetchTableData);
    yield put(setTableData(tableData));

    const donutData: ChartData[] = yield call(fetchDonutData);
    yield put(setDonutData(donutData));

    const pieData: ChartData[] = yield call(fetchPieData);
    yield put(setPieData(pieData));

    yield put(setLoading(false));
  } catch (error) {
    console.error("Error fetching dashboard data", error);
    yield put(setLoading(false));
  }
}

export default function* dashboardSaga() {
  yield takeEvery(fetchDashboardData.type, handleFetchDashboardData);
}
