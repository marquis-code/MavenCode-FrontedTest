// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Stat, TableRow, ChartData } from '../types/dashboardTypes';

// interface DashboardState {
//   stats: Stat[];
//   tableData: TableRow[];
//   donutData: ChartData[];
//   pieData: ChartData[];
//   loading: boolean;
// }

// const initialState: DashboardState = {
//   stats: [],
//   tableData: [],
//   donutData: [],
//   pieData: [],
//   loading: false,
// };

// const dashboardSlice = createSlice({
//   name: 'dashboard',
//   initialState,
//   reducers: {
//     fetchDashboardData: (state) => {
//       state.loading = true;
//     },
//     setStats: (state, action: PayloadAction<Stat[]>) => {
//       state.stats = action.payload;
//       state.loading = false;
//     },
//     setTableData: (state, action: PayloadAction<TableRow[]>) => {
//       state.tableData = action.payload;
//       state.loading = false;
//     },
//     setDonutData: (state, action: PayloadAction<ChartData[]>) => {
//       state.donutData = action.payload;
//       state.loading = false;
//     },
//     setPieData: (state, action: PayloadAction<ChartData[]>) => {
//       state.pieData = action.payload;
//       state.loading = false;
//     },
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.loading = action.payload;
//     },
//   },
// });

// export const {
//   fetchDashboardData,
//   setStats,
//   setTableData,
//   setDonutData,
//   setPieData,
//   setLoading,
// } = dashboardSlice.actions;

// export default dashboardSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardState, Stat, TableRow, ChartData } from '../types/dashboardTypes';

const initialState: DashboardState = {
  stats: [],
  tableData: [],
  donutData: [],
  pieData: [],
  loading: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchDashboardData: (state) => {
      // No state changes here; just an action for the saga to listen to
      state.loading = true;
    },
    setStats: (state, action: PayloadAction<Stat[]>) => {
      state.stats = action.payload;
      state.loading = false;
    },
    setTableData: (state, action: PayloadAction<TableRow[]>) => {
      state.tableData = action.payload;
      state.loading = false;
    },
    setDonutData: (state, action: PayloadAction<ChartData[]>) => {
      state.donutData = action.payload;
      state.loading = false;
    },
    setPieData: (state, action: PayloadAction<ChartData[]>) => {
      state.pieData = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  fetchDashboardData,  // Export fetchDashboardData action here
  setStats,
  setTableData,
  setDonutData,
  setPieData,
  setLoading,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
