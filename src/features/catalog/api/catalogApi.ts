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
             fetchAllItems: build.query<ItemState[], { limit: number; categoryId?: number }>({
              query: ({limit, categoryId}) => ({
                url: `/api/items`,
                params: {
                  _limit: limit,
                  ...(categoryId && { categoryId }), 
                },
              }),
                 }),
      }),
})

export const { useFetchAllСategoriesQuery, useFetchAllItemsQuery  } = catalogAPI;


