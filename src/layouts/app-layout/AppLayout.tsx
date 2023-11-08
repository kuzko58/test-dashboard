import React from "react";

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <main className="w-full min-h-full flex flex-col">{children}</main>;
};

export default AppLayout;
