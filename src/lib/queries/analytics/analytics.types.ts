export interface UserTrafficDataT {
  month: string;
  joined: number;
  subscribed: number;
}
export type GetUserTrafficDataDAO = UserTrafficDataT[];

export interface LocationStatsDataT {
  day: string;
  country: number;
  city: number;
}
export type GetLocationStatsDataDAO = LocationStatsDataT[];

export interface StatisticsTrendT {
  value: string;
  color: string;
}

export interface StatisticsDataT {
  Icon: string;
  title: string;
  count: number;
  trend: StatisticsTrendT | null;
}
export type GetStatisticsDataDAO = StatisticsDataT[];

export interface ConversionRateDataT {
  name: string;
  value: number;
}
export type GetConversionRateDataDAO = ConversionRateDataT[];

export interface WebsiteAnalyticsDataT {
  period: string;
  visits: number;
  sessions: number;
}

export interface WebsiteAnalyticsDataGroupT {
  yearly: WebsiteAnalyticsDataT[];
  monthly: WebsiteAnalyticsDataT[];
  weekly: WebsiteAnalyticsDataT[];
}

export type GetWebsiteAnalyticsDataDAO = WebsiteAnalyticsDataGroupT;
