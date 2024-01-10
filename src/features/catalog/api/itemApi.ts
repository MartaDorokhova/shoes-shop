import { baseAPI } from 'api/api';

export interface ItemState {
  title: string;
  price: number;
  images: Array<string>;
  id: number;
  category: number ;
}


export const itemAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
        fetchAllItems: build.query<ItemState[], number>({
          query: (limit: number = 5) => ({
            url: `/api/items`,
            params: {
              _limit: limit,
            },
          }),
             }),
       
      }),
})

export const { useFetchAllItemsQuery } = itemAPI;