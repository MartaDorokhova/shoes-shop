import { baseAPI } from 'api/api';

interface Category {
  id:number;
  title: string
}

export const сategoriesAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
        fetchAllСategories: build.query<Category[], number>({
          query: (limit: number = 5) => ({
            url: `/api/categories`,
            params: {
              _limit: limit,
            },
          }),
             }),
       
      }),
})

export const { useFetchAllСategoriesQuery } = сategoriesAPI;

