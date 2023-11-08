import { getStatisticsData } from "@/lib/queries/analytics";
import { StatisticsDataT } from "@/lib/queries/analytics/analytics.types";
import { useEffect, useMemo, useState } from "react";

export const useStatistics = () => {
  const [statisticsData, setStatisticsData] = useState<StatisticsDataT[]>([]);

  const fetchStatistics = async () => {
    const { data, error } = await getStatisticsData();

    if (error) {
      console.error(error);
    } else if (data?.data) {
      setStatisticsData(data.data);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  return useMemo(
    () => ({
      statisticsData,
    }),
    [statisticsData]
  );
};
