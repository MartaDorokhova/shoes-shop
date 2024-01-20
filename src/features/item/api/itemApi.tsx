import { baseAPI } from "api/api";
import { ItemResponse } from "../interfaces";

export const itemAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    fetchItem: build.query<ItemResponse, number>({
      query: (id) => ({
        url: `/api/items/${id}`,
        // params: {
        //   ...(id && { id }),
        // },
      }),
    }),
  }),
});
console.log();

export const { useFetchItemQuery } = itemAPI;
