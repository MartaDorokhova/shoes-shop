import { baseAPI } from 'api/api';
import { CategoryListResponse, ItemListResponse} from '../interfaces';

export const catalogAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
        fetchAllСategories: build.query<CategoryListResponse[], {}>({
          query: () => ({
            url: `/api/categories`,

          }),
             }),
             fetchAllItems: build.query<ItemListResponse[], { categoryId?: number; offset?:number }>({
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


