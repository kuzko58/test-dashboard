import React from "react";

interface CheckmarkProps {
  fill?: string;
}

const Checkmark = ({ fill = "#2B3FF2" }: CheckmarkProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill={fill}
      />
      <path
        d="M10.58 15.58C10.38 15.58 10.19 15.5 10.05 15.36L7.22 12.53C6.93 12.24 6.93 11.76 7.22 11.47C7.51 11.18 7.99 11.18 8.28 11.47L10.58 13.77L15.72 8.63001C16.01 8.34001 16.49 8.34001 16.78 8.63001C17.07 8.92001 17.07 9.40001 16.78 9.69001L11.11 15.36C10.97 15.5 10.78 15.58 10.58 15.58Z"
        fill="white"
      />
    </svg>
  );
};

export default Checkmark;
