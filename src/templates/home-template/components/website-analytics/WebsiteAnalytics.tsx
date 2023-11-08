"use client";

import Checkmark from "@/components/icons/Checkmark";
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { twMerge } from "tailwind-merge";
import { useWebsiteAnalytics } from "./use-website-analytics";

const WebAnalytics = () => {
  const { formatTooltipData, websiteAnalyticsData, filter, setFilter } =
    useWebsiteAnalytics();

  return (
    <div className="w-full rounded-2xl shadow-card bg-crd p-6 h-[460px] flex flex-col gap-10 justify-between">
      <CardHeader filter={filter} setFilter={setFilter} />
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={250}
            data={
              websiteAnalyticsData
                ? websiteAnalyticsData[
                    filter as keyof typeof websiteAnalyticsData
                  ]
                : []
            }
            margin={{
              top: 0,
              right: 0,
              left: -60,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(140, 137, 180, 0.40)"
            />
            <XAxis
              dataKey="period"
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
              tickLine={false}
              tick={false}
              allowDecimals={false}
              style={{
                fontWeight: 400,
              }}
            />
            <Tooltip formatter={formatTooltipData} />
            <Area
              type="monotone"
              dataKey="visits"
              stroke="#2B3FF2"
              fill="#2b3ff24d"
            />
            <Area
              type="monotone"
              dataKey="sessions"
              stroke="#8EF27E"
              fill="#8ef27e4d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <Legend />
    </div>
  );
};

export default WebAnalytics;

interface CardHeaderProps {
  filter: string;
  setFilter: (text: string) => void;
}

const CardHeader = ({ filter, setFilter }: CardHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-2xl text-white font-space font-bold">
        Website Analytics
      </p>
      <p className="text-[15px] text-[#AEBBDA]">Based on your performance</p>
      <div className="w-fit flex gap-2 p-1 rounded-lg bg-[#290C51]">
        <FilterButton
          text="Weekly"
          isActive={filter === "weekly"}
          handleClick={() => setFilter("weekly")}
        />
        <FilterButton
          text="Monthly"
          isActive={filter === "monthly"}
          handleClick={() => setFilter("monthly")}
        />
        <FilterButton
          text="Yearly"
          isActive={filter === "yearly"}
          handleClick={() => setFilter("yearly")}
        />
      </div>
    </div>
  );
};

interface FilterButtonProps {
  text: string;
  isActive: boolean;
  handleClick: () => void;
}

const FilterButton = ({ isActive, text, handleClick }: FilterButtonProps) => {
  return (
    <button
      className={twMerge(
        "w-[65px] h-[27px] rounded-md text-xs text-[#818181] font-poppins",
        `${isActive ? "text-white bg-[#250442]" : ""}`
      )}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

const Legend = () => {
  return (
    <div className="w-full flex gap-6 py-2">
      <div className="flex gap-2">
        <Checkmark />
        <p className="text-white text-[15px] font-poppins font-light">Visits</p>
      </div>
      <div className="flex gap-2">
        <Checkmark fill="#8EF27E" />
        <p className="text-white text-[15px] font-poppins font-light">
          Sessions
        </p>
      </div>
    </div>
  );
};
