import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ItemState } from "app/store/reducers/ItemSlice";

export const itemAPI = createApi({
  reducerPath: "itemAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7070" }),
  tagTypes: ["Item"],
  endpoints: (build) => ({
    fetchAllItems: build.query<ItemState[], number>({
      query: (limit: number = 5) => ({
        url: `/api/items`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Item"],
    }),
    createItem: build.mutation<ItemState, ItemState>({
      query: (item) => ({
        url: `/items`,
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["Item"],
    }),
    updateItem: build.mutation<ItemState, ItemState>({
      query: (item) => ({
        url: `/items/${item.id}`,
        method: "PUT",
        body: item,
      }),
      invalidatesTags: ["Item"],
    }),
    deleteItem: build.mutation<ItemState, ItemState>({
      query: (item) => ({
        url: `/items/${item.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Item"],
    }),
  }),
});

export const { useFetchAllItemsQuery } = itemAPI;
