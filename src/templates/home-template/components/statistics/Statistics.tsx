"use client";

import React from "react";
import { STATISTICS_ICONS } from "../../constants/statistics-data";
import { useStatistics } from "./use-statistics";

const Statistics = () => {
  const { statisticsData } = useStatistics();

  return (
    <div className="w-full lg:w-2/5 xl:w-1/4 flex flex-col gap-6">
      {statisticsData.map((stats, index) => (
        <StatisticsCard
          key={index}
          Icon={STATISTICS_ICONS[stats.Icon as keyof typeof STATISTICS_ICONS]}
          title={stats.title}
          count={stats.count}
          trend={stats.trend as StatisticsCardProps["trend"]}
        />
      ))}
    </div>
  );
};

export default Statistics;

interface StatisticsCardProps {
  title: string;
  count: number;
  Icon: React.FC;
  trend?: {
    value: string;
    color: "red" | "green";
  };
}

const TREND_COLOR = {
  green: "bg-[rgba(2,177,90,0.15)] text-[#00CA65]",
  red: "bg-[rgba(232,0,27,0.15)] text-[#E41414]",
};

const StatisticsCard = ({ title, count, Icon, trend }: StatisticsCardProps) => {
  return (
    <div className="flex gap-4 w-full h-[100px] bg-crd rounded-2xl items-center shadow-card p-6">
      <div className="min-w-[36px] min-h-[36px] w-12 h-12 rounded-[10px] overflow-hidden">
        <Icon />
      </div>
      <div>
        <p className="text-[15px] text-[#8C89B4] font-space">{title}</p>
        <p className="text-2xl text-white font-space font-medium">{count}</p>
      </div>
      {trend ? (
        <div
          className={`w-[63px] h-[23px] flex items-center justify-center rounded-[10px] ml-auto mr-0 ${
            TREND_COLOR[trend.color]
          }`}
        >
          {trend.value}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
