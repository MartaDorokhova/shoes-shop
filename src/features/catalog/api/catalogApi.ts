import { baseAPI } from 'api/api';
import { Category, ItemState} from '../interfaces';

export const catalogAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
        fetchAllСategories: build.query<Category[], {}>({
          query: () => ({
            url: `/api/categories`,

          }),
             }),
             fetchAllItems: build.query<ItemState[], { categoryId?: number; offset?:number }>({
              query: ({ categoryId, offset}) => ({
                url: `/api/items`,
                params: {          
                  ...(categoryId && { categoryId }), 
                  ...(offset && { offset }), 
                },
              }),
                 }),
      }),
})

export const { useFetchAllСategoriesQuery, useFetchAllItemsQuery  } = catalogAPI;


