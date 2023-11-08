"use client";

import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useLocationStats } from "./use-location.stats";

const LocationStats = () => {
  const { formatYAxisData, formatTooltipData, locationData } =
    useLocationStats();

  return (
    <div className="w-full rounded-2xl shadow-card bg-crd p-6 h-[460px] flex flex-col gap-10 justify-between">
      <CardHeader />
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={locationData}
            margin={{
              top: 0,
              right: 0,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              stroke="rgba(140, 137, 180, 0.40)"
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              tick={{
                stroke: "#BCBCBC",
                strokeWidth: 1,
                fontSize: "14px",
                fontWeight: 400,
                opacity: 0.6,
              }}
              style={{
                fontWeight: 400,
              }}
            />
            <YAxis
              tickFormatter={formatYAxisData}
              axisLine={false}
              tickLine={false}
              tick={{ stroke: "#BCBCBC", fontSize: "14px", opacity: 0.6 }}
              allowDecimals={false}
              style={{
                fontWeight: 400,
              }}
            />
            <Tooltip formatter={formatTooltipData} />
            <Bar
              dataKey="city"
              fill="#FB4540"
              barSize={12}
              shape={<Rectangle />}
              activeBar={<Rectangle />}
              stackId="a"
            />
            <Bar
              dataKey="country"
              fill="#00F2DE"
              barSize={12}
              shape={<Rectangle />}
              activeBar={<Rectangle />}
              stackId="a"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LocationStats;

const CardHeader = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-2xl text-white font-space font-bold">Location</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#00F2DE] rounded-full" />
          <p className="text-[13px] text-[#909BBB] capitalize font-space">
            Country
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#FB4540] rounded-full" />
          <p className="text-[13px] text-[#909BBB] capitalize font-space">
            City
          </p>
        </div>
      </div>
    </div>
  );
};
