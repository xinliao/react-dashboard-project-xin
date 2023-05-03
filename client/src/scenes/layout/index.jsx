import React, { useState } from "react";
import { Box, useMediaQuery, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { makeStyles } from "@mui/styles";
import { display } from "@mui/system";
import { useGetUserQuery } from "state/api";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

// layout is gna exist in everysingle page
// and outlet is to displayed whatever is put into it in App.js
const Layout = () => {
  const classes = useStyles();
  // if you use th prefix you know its a boolean
  const isNonMobile = useMediaQuery("(min-width:600px)");
  // in desktop its true and mobile its false
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const userId = useSelector((state) => state.global.userId);
  //api call
  const { data } = useGetUserQuery(userId);
  console.log("data", data);

  return (
    <Box>
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
