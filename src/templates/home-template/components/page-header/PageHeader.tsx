import React from "react";

const PageHeader = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-3xl font-space font-bold gradient-header">
          User Analytics
        </p>
        <p className="text-[15px] text-[#AEBBDA] opacity-80">
          Lorem ipsum dolor sit consectetur.
        </p>
      </div>
      <select className="w-[172px] h-12 p-1 bg-transparent text-xl text-[#8F9BB7] font-medium border-[1px] border-[rgba(174,171,216,0.40)] rounded-[10px]">
        <option>User</option>
      </select>
    </div>
  );
};

export default PageHeader;
