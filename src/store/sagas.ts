// src/store/sagas.ts
import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import { Stat, TableRow, ChartData } from '../types/dashboardTypes';

function* fetchDashboardData() {
  try {
    const stats: Stat[] = yield call(() =>
      Promise.resolve([
        { title: "New Tickets", value: 43, change: 6 },
        { title: "Closed Today", value: 17, change: -3 },
        { title: "New Replies", value: 7, change: 9 },
        { title: "Followers", value: 27300, change: 3 },
        { title: "Daily earnings", value: 95, change: -2, suffix: "$" },
        { title: "Products", value: 621, change: -1 },
      ])
    );

    const tableData: TableRow[] = yield call(() =>
      Promise.resolve([
        { user: "Ronald Bradly", commit: "Initial Commit", date: "May 6, 2018" },
        { user: "Russell Gibson", commit: "Main Structure", date: "April 22, 2018" },
        { user: "Beverly Armstrong", commit: "Left sidebar adjustments", date: "April 15, 2018" },
      ])
    );

    const donutData: ChartData[] = yield call(() =>
      Promise.resolve([
        { name: "Segment 1", value: 37 },
        { name: "Segment 2", value: 63 },
      ])
    );

    const pieData: ChartData[] = yield call(() =>
      Promise.resolve([
        { name: "Segment 1", value: 47.4 },
        { name: "Segment 2", value: 33.1 },
        { name: "Segment 3", value: 10.9 },
        { name: "Segment 4", value: 9.0 },
      ])
    );

    yield put({ type: 'SET_STATS', payload: stats });
    yield put({ type: 'SET_TABLE_DATA', payload: tableData });
    yield put({ type: 'SET_DONUT_DATA', payload: donutData });
    yield put({ type: 'SET_PIE_DATA', payload: pieData });
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
  }
}

function* watchFetchDashboardData() {
  yield takeEvery('FETCH_DASHBOARD_DATA', fetchDashboardData);
}

export default function* rootSaga() {
  yield all([watchFetchDashboardData()]);
}
