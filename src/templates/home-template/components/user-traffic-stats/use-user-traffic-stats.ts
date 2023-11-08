import { getUserTrafficData } from "@/lib/queries/analytics";
import { UserTrafficDataT } from "@/lib/queries/analytics/analytics.types";
import { useEffect, useMemo, useState } from "react";

export const useUserTrafficStats = () => {
  const [userTrafficStatsData, setUserTrafficStatsData] = useState<
    UserTrafficDataT[]
  >([]);
  const formatYAxisData = (value: number) => {
    return value ? `${value}%` : `${value}`;
  };

  const formatTooltipData = (value: any, name: string, props: any) => {
    return [`${value}%`, name];
  };

  const fetchUserTrafficStats = async () => {
    const { data, error } = await getUserTrafficData();

    if (error) {
      console.error(error);
    } else if (data?.data) {
      setUserTrafficStatsData(data.data);
    }
  };

  useEffect(() => {
    fetchUserTrafficStats();
  }, []);

  return useMemo(
    () => ({
      formatYAxisData,
      formatTooltipData,
      userTrafficStatsData,
    }),
    [userTrafficStatsData]
  );
};
