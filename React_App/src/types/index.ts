
export interface Visualization {
    title: string;
    description: string;
    svg: string;
    alt: string;
  }
  
 
  export interface Visualizations {
    [key: string]: Visualization;
  }
  
  
  export type YearOption = number;
  export type AreaOption = string;
  export type SeverityOption = string;
  
  
  export interface CrashLocation {
    latitude: number;
    longitude: number;
    crashes: number;
    intersection: string;
  }
  
  export interface HourlyCrashData {
    hour: number;
    crashes: number;
  }
  
  export interface MonthlyCrashData {
    month: string;
    crashes: number;
  }
  
  export interface SeasonalCrashData {
    season: string;
    crashes: number;
  }
  
  export interface DayHourCrashData {
    day: string;
    hour: number;
    crashes: number;
  }
  
 
  export interface CrashData {
    hourly: HourlyCrashData[];
    monthly: MonthlyCrashData[];
    seasonal: SeasonalCrashData[];
    locations: CrashLocation[];
    dayHourHeatmap: DayHourCrashData[];
  }