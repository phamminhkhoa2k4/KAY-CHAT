import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

const DashboardLayout = () => {
  return (
    <>
      <Box display={"flex"}>
      {/* Sidebar */}
        <Sidebar />
        <Outlet />
      </Box>
    </>
  );
};

export default DashboardLayout;
