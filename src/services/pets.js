import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const petsApi = createApi({
  reducerPath: "pets",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coolpets.free.beeceptor.com",
  }),
  endpoints: (builder) => ({
    getPets: builder.query({
      query: () => `pets`,
    }),
  }),
});

export const { useGetPetsQuery } = petsApi;

//"https://61f6e0072e1d7e0017fd6f82.mockapi.io"

//api/v1/pets
