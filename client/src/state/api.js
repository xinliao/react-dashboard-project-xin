import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),

  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customer"],
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
  }),
});

// useGetUserQuery is basically the name of the api 'getUser' with a
//prefix of use and suffix of Query
export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } =
  api;
