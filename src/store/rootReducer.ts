// src/store/rootReducer.ts
import { combineReducers } from 'redux';
import { DashboardState } from '../types/dashboardTypes';

const initialState: DashboardState = {
  stats: [],
  tableData: [],
  donutData: [],
  pieData: [],
};

type Action =
  | { type: 'SET_STATS'; payload: Stat[] }
  | { type: 'SET_TABLE_DATA'; payload: TableRow[] }
  | { type: 'SET_DONUT_DATA'; payload: ChartData[] }
  | { type: 'SET_PIE_DATA'; payload: ChartData[] };

const dashboardReducer = (state = initialState, action: Action): DashboardState => {
  switch (action.type) {
    case 'SET_STATS':
      return { ...state, stats: action.payload };
    case 'SET_TABLE_DATA':
      return { ...state, tableData: action.payload };
    case 'SET_DONUT_DATA':
      return { ...state, donutData: action.payload };
    case 'SET_PIE_DATA':
      return { ...state, pieData: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
