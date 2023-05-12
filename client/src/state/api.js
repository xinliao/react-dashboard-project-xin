import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),

  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customer", "Transactions", "Geography"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
  }),
});

// useGetUserQuery is basically the name of the api 'getUser' with a
//prefix of use and suffix of Query
export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
} = api;
