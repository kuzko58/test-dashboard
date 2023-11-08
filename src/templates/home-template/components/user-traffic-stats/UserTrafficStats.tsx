"use client";

import React from "react";
import {
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from "recharts";
import { useUserTrafficStats } from "./use-user-traffic-stats";

const UserTrafficStats = () => {
  const { formatYAxisData, formatTooltipData, userTrafficStatsData } =
    useUserTrafficStats();
  return (
    <div className="w-full lg:w-3/5 xl:w-3/4 rounded-2xl shadow-card bg-crd p-6 h-[460px] flex flex-col gap-10 justify-between">
      <CardHeader />
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={300}
            data={userTrafficStatsData}
            margin={{
              top: 0,
              right: 0,
              left: -15,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="rgba(140, 137, 180, 0.40)"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ stroke: "#BCBCBC", fontSize: "14px", opacity: 0.6 }}
              style={{
                fontWeight: 400,
              }}
            />
            <YAxis
              tickFormatter={formatYAxisData}
              axisLine={false}
              tickLine={false}
              tick={{ stroke: "#BCBCBC", fontSize: "14px", opacity: 0.6 }}
              style={{
                fontWeight: 400,
              }}
            />
            <Tooltip formatter={formatTooltipData} />
            <Bar
              dataKey="joined"
              fill="#0082CC"
              barSize={52}
              shape={<Rectangle radius={10} />}
              activeBar={<Rectangle radius={10} />}
            />
            <Bar
              dataKey="subscribed"
              fill="#FB4540"
              barSize={52}
              shape={<Rectangle radius={10} />}
              activeBar={<Rectangle radius={10} />}
            />
            <Line
              type="monotone"
              dataKey="joined"
              stroke="#00F2DE"
              dot={{ stroke: "#00F2DE", strokeWidth: 2 }}
              strokeDasharray="4"
            />
            <Line
              type="monotone"
              dataKey="subscribed"
              stroke="purple"
              dot={{ stroke: "#00F2DE", strokeWidth: 2 }}
              strokeDasharray="4"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserTrafficStats;

const CardHeader = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-between">
      <p className="text-2xl text-white font-space font-bold">User Traffic</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#009BF2] rounded" />
          <p className="text-[13px] text-[#909BBB] capitalize">User Sign up</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#FB4540] rounded" />
          <p className="text-[13px] text-[#909BBB] capitalize">
            User Subscribed
          </p>
        </div>
        <select className="w-[133px] h-[32px] p-1 bg-transparent text-sm text-[#8F9BB7] font-poppins border-[1px] border-[rgba(174,171,216,0.40)] rounded-[10px]">
          <option>Current Year</option>
        </select>
      </div>
    </div>
  );
};
