import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemState } from "app/store/reducers/ItemSlice";

export const hitsAPI = createApi({
  reducerPath: "hitsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7070" }),
  tagTypes: ["Hits"],
  endpoints: (build) => ({
    fetchAllHits: build.query<ItemState[], number>({
      query: (limit: number = 5) => ({
        url: `/api/top-sales`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Hits"],
    }),
   
  }),
});

export const { useFetchAllHitsQuery } = hitsAPI;
