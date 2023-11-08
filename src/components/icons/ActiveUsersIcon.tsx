import React from "react";

const ActiveUsersIcon = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#00C543]">
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 20C3.6 20 4 19.6 4 19V17H5C5.6 17 6 16.6 6 16V4C6 3.4 5.6 3 5 3H4V1C4 0.4 3.6 0 3 0C2.4 0 2 0.4 2 1V3H1C0.4 3 0 3.4 0 4V16C0 16.6 0.4 17 1 17H2V19C2 19.6 2.4 20 3 20Z"
          fill="white"
        />
        <path
          d="M11 0C10.4 0 10 0.4 10 1V3H9C8.4 3 8 3.4 8 4V12C8 12.6 8.4 13 9 13H13C13.6 13 14 12.6 14 12V4C14 3.4 13.6 3 13 3H12V1C12 0.4 11.6 0 11 0Z"
          fill="white"
        />
        <path
          d="M19 0C18.4 0 18 0.4 18 1V11H17C16.4 11 16 11.4 16 12V19C16 19.6 16.4 20 17 20H21C21.6 20 22 19.6 22 19V12C22 11.4 21.6 11 21 11H20V1C20 0.4 19.6 0 19 0Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default ActiveUsersIcon;
