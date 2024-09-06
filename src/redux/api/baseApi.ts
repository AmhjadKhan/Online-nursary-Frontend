import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://online-nursary-backend.vercel.app",
  }),
  endpoints: () => ({})
});