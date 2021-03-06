import React from "react";

const DashboardLayout = (props) => {
  const { children } = props;

  return <div className="dashboard-layout">{children}</div>;
};

export default DashboardLayout;
