import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ItemState } from "app/store/reducers/ItemSlice";

export const itemAPI = createApi({
  reducerPath: "itemAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Item"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<ItemState[], number>({
      query: (limit: number = 5) => ({
        url: `/items`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Item"],
    }),
    createPost: build.mutation<ItemState, ItemState>({
      query: (item) => ({
        url: `/items`,
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["Item"],
    }),
    updatePost: build.mutation<ItemState, ItemState>({
      query: (item) => ({
        url: `/items/${item.id}`,
        method: "PUT",
        body: item,
      }),
      invalidatesTags: ["Item"],
    }),
    deletePost: build.mutation<ItemState, ItemState>({
      query: (item) => ({
        url: `/items/${item.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Item"],
    }),
  }),
});
