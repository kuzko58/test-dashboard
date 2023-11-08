import ActiveUsersIcon from "@/components/icons/ActiveUsersIcon";
import SubscribersIcon from "@/components/icons/SubscribersIcon";
import TotalClicksIcon from "@/components/icons/TotalClicksIcon";
import VisitsIcon from "@/components/icons/VisitsIcon";

export const statisticsData = [
  {
    Icon: VisitsIcon,
    title: "Total Visits",
    count: 6300,
    trend: {
      value: "+1.29%",
      color: "green",
    },
  },
  {
    Icon: SubscribersIcon,
    title: "Total Subscribers",
    count: 32,
    trend: {
      value: "+1.29%",
      color: "red",
    },
  },
  {
    Icon: ActiveUsersIcon,
    title: "Active Users",
    count: 20,
    trend: null,
  },
  {
    Icon: TotalClicksIcon,
    title: "Total Clicks",
    count: 199,
    trend: null,
  },
];

export const STATISTICS_ICONS = {
  VisitsIcon,
  SubscribersIcon,
  ActiveUsersIcon,
  TotalClicksIcon,
};
