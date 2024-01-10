import { baseAPI } from 'api/api';

interface Category {
  id:number;
  title: string
}

export interface ItemState {
  title: string;
  price: number;
  images: Array<string>;
  id: number;
  category: number ;
}

export const catalogAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
        fetchAllСategories: build.query<Category[], number>({
          query: (limit: number = 5) => ({
            url: `/api/categories`,
            params: {
              _limit: limit,
            },
          }),
             }),
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

export const { useFetchAllСategoriesQuery } = catalogAPI;
export const { useFetchAllItemsQuery } = catalogAPI;

