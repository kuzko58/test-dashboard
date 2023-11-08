"use client";

import React from "react";
import { Tooltip, Pie, PieChart, Cell, Label } from "recharts";
import { useConversionRateStats } from "./use-conversion-rate-stats";

const COLORS = ["#3F46F7", "#5e5ce61a", "#5e5ce680"];

const ConversionRateStats = () => {
  const { formatTooltipData, conversionRateData } = useConversionRateStats();

  return (
    <div className="w-full rounded-2xl shadow-card bg-crd p-6 h-[460px] flex flex-col gap-10 justify-start md:justify-center">
      <CardHeader />
      <div className="w-full h-[300px] flex gap-6 items-center justify-center flex-col md:flex-row">
        <PieChart width={210} height={210}>
          <Tooltip formatter={formatTooltipData} />
          <Pie
            data={conversionRateData}
            innerRadius={83}
            outerRadius={103}
            fill="#8884d8"
            paddingAngle={5}
            cornerRadius={40}
            dataKey="value"
          >
            <Label position="center" value={583} fill="#fff" />
            {conversionRateData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="flex flex-wrap md:flex-col gap-2 xl:gap-4 justify-center">
          {conversionRateData.map((entry, index) => (
            <LegendCard
              key={index}
              title={entry.name}
              count={entry.value}
              color={COLORS[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConversionRateStats;

const CardHeader = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-2xl text-white font-space font-bold">
        Conversion Rate
      </p>
    </div>
  );
};

interface LegendCardProps {
  color: string;
  title: string;
  count: number;
}

const LegendCard = ({ color, title, count }: LegendCardProps) => {
  return (
    <div className="flex gap-4">
      <div className="py-2">
        <div
          className={`w-[40px] h-[5px] rounded-full`}
          style={{ backgroundColor: color }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-[rgba(235,235,245,0.30)] font-poppins">
          {title}
        </p>
        <p className="text-sm text-white font-semibold font-poppins hidden md:block">
          {count.toLocaleString()} users
        </p>
      </div>
    </div>
  );
};
