import { getLocationStatsData } from "@/lib/queries/analytics";
import { LocationStatsDataT } from "@/lib/queries/analytics/analytics.types";
import { useEffect, useMemo, useState } from "react";

export const useLocationStats = () => {
  const [locationData, setLocationData] = useState<LocationStatsDataT[]>([]);

  const formatYAxisData = (value: number) => {
    return value ? `$${Math.ceil(value / 1000)}k` : `${value}`;
  };

  const formatTooltipData = (value: any, name: string, props: any) => {
    return [`$${value}`, name];
  };

  const fetchLocationStats = async () => {
    const { data, error } = await getLocationStatsData();

    if (error) {
      console.error(error);
    } else if (data?.data) {
      setLocationData(data.data);
    }
  };

  useEffect(() => {
    fetchLocationStats();
  }, []);

  return useMemo(
    () => ({
      formatYAxisData,
      formatTooltipData,
      locationData,
    }),
    [locationData]
  );
};
