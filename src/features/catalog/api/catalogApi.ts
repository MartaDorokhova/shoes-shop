import { baseAPI } from 'api/api';
import { CategoryListResponse, ItemListResponse} from '../interfaces';

export const catalogAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
        fetchAllСategories: build.query<CategoryListResponse[], {}>({
          query: () => ({
            url: `/api/categories`,

          }),
             }),
       fetchAllItems: build.query<ItemListResponse[], { categoryId?: number; offset?:number; q?:string }>({
          query: ({ categoryId, offset, q}) => ({
             url: `/api/items`,
             params: {          
                  ...(categoryId && { categoryId }), 
                  ...(offset && { offset }), 
                  ...(q && { q }), 
                              },
              }),
                 }),
      }),
})

export const { useFetchAllСategoriesQuery, useFetchAllItemsQuery  } = catalogAPI;


