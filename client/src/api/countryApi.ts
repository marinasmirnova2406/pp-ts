import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getCountriesByGroup: builder.query({
      query: (region) => `country-names-by-group/${region}`,
    }),
  }),
});

export const { useGetCountriesByGroupQuery } = countryApi;
