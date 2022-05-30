import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const petsApi = createApi({
  reducerPath: "pets",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61f6e0072e1d7e0017fd6f82.mockapi.io",
  }),
  endpoints: (builder) => ({
    getPets: builder.query({
      query: () => `api/v1/pets`,
    }),
  }),
});

export const { useGetPetsQuery } = petsApi;
