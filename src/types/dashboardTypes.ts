// src/types/dashboardTypes.ts
export interface Stat {
  title: string;
  value: number | string;
  change: number;
  suffix?: string;
}

export interface TableRow {
  user: string;
  commit: string;
  date: string;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface DashboardState {
  stats: Stat[];
  tableData: TableRow[];
  donutData: ChartData[];
  pieData: ChartData[];
}
