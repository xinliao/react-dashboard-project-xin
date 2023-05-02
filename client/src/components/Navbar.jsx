import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import {
  Menu,
  Button,
  Box,
  Typography,
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";

const Navbar = ({ user, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        postion: "stick",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* leftside */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(true)}>open</IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3em"
            p="0.1rem 1.5 rem"
          >
            <InputBase placeholder="search ...." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* rightside */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontsize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontsize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontsize: "25px" }} />
          </IconButton>

          {/* profile */}
          <FlexBetween>
            <Button
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>

            {/* dropdown menu */}
            <Menu
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            ></Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
