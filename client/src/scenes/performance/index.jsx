import React from "react";
import { useGetPerformanceQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import { useSelector } from "react-redux";
import { Box, useTheme } from "@mui/material";
import CustomColumnMenu from "components/DataGridCustomColumnMenu";

const Performance = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetPerformanceQuery(userId);
  console.log("performancedata", data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 0.4,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },

    {
      field: "products",
      headerName: "No of Products",
      flex: 0.4,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="PERFORMANCE"
        subtitle="Track your affiliate sales performance"
      />
      <Box mt="40px" height="75vh">
        <DataGrid
          laoding={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.sales) || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  );
};

export default Performance;
