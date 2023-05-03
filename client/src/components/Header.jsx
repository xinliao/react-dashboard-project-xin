import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

function Header({ title, subtitle }) {
  const theme = useTheme();
  return (
    <Box sx={{ mt: "60px" }}>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h1" color={theme.palette.secondary[100]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
