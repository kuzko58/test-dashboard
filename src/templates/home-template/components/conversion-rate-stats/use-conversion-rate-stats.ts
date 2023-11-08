import { getConversionRateData } from "@/lib/queries/analytics";
import { ConversionRateDataT } from "@/lib/queries/analytics/analytics.types";
import { useEffect, useMemo, useState } from "react";

export const useConversionRateStats = () => {
  const [conversionRateData, setConversionRateData] = useState<
    ConversionRateDataT[]
  >([]);

  const formatTooltipData = (value: any, name: string, props: any) => {
    return [`${value.toLocaleString()} users`, name];
  };

  const fetchConversionRateStats = async () => {
    const { data, error } = await getConversionRateData();

    if (error) {
      console.error(error);
    } else if (data?.data) {
      setConversionRateData(data.data);
    }
  };

  useEffect(() => {
    fetchConversionRateStats();
  }, []);

  return useMemo(
    () => ({
      formatTooltipData,
      conversionRateData,
    }),
    [conversionRateData]
  );
};
