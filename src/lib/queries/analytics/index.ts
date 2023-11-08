import { API_PATHS } from "@/lib/paths/api-path";
import { get } from "@/lib/utils/net";
import type {
  GetLocationStatsDataDAO,
  GetUserTrafficDataDAO,
  GetStatisticsDataDAO,
  GetConversionRateDataDAO,
  GetWebsiteAnalyticsDataDAO,
} from "./analytics.types";

export const getLocationStatsData = async () => {
  return await get<GetLocationStatsDataDAO>(API_PATHS.locationStats);
};

export const getUserTrafficData = async () => {
  return await get<GetUserTrafficDataDAO>(API_PATHS.userTrafficStats);
};

export const getStatisticsData = async () => {
  return await get<GetStatisticsDataDAO>(API_PATHS.statistics);
};

export const getConversionRateData = async () => {
  return await get<GetConversionRateDataDAO>(API_PATHS.conversionRate);
};

export const getWebsiteAnalyticsData = async () => {
  return await get<GetWebsiteAnalyticsDataDAO>(API_PATHS.websiteAnalytics);
};
