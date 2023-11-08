import React from "react";
import PageHeader from "./components/page-header/PageHeader";
import Statistics from "./components/statistics/Statistics";
import UserTrafficStats from "./components/user-traffic-stats/UserTrafficStats";
import LocationStats from "./components/location-stats/LocationStats";
import ConversionRateStats from "./components/conversion-rate-stats/ConversionRateStats";
import WebsiteAnalytics from "./components/website-analytics/WebsiteAnalytics";

const HomeTemplate = () => {
  return (
    <div className="w-full h-full flex flex-col p-10 gap-6">
      <PageHeader />
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <Statistics />
        <UserTrafficStats />
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <LocationStats />
        <ConversionRateStats />
        <WebsiteAnalytics />
      </div>
    </div>
  );
};

export default HomeTemplate;
