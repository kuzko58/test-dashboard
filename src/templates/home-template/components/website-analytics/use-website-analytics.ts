import { getWebsiteAnalyticsData } from "@/lib/queries/analytics";
import { WebsiteAnalyticsDataGroupT } from "@/lib/queries/analytics/analytics.types";
import { useEffect, useMemo, useState } from "react";

export const useWebsiteAnalytics = () => {
  const [websiteAnalyticsData, setWebsiteAnalyticsData] =
    useState<WebsiteAnalyticsDataGroupT | null>(null);
  const [filter, setFilter] = useState("monthly");

  const formatTooltipData = (value: any, name: string, props: any) => {
    return [`${value}`, name];
  };

  const fetchWebsiteAnalyticsStats = async () => {
    const { data, error } = await getWebsiteAnalyticsData();

    if (error) {
      console.error(error);
    } else if (data?.data) {
      setWebsiteAnalyticsData(data.data);
    }
  };

  useEffect(() => {
    fetchWebsiteAnalyticsStats();
  }, []);

  return useMemo(
    () => ({
      formatTooltipData,
      websiteAnalyticsData,
      filter,
      setFilter,
    }),
    [websiteAnalyticsData, filter]
  );
};
