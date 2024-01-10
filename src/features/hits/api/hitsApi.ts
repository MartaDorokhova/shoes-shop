import { baseAPI } from 'api/api';

export interface HitState {
  title: string;
  price: number;
  images: Array<string>;
  id: number;
  category: number ;
}

export const hitsAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
        fetchAllHits: build.query<HitState[], number>({
          query: (limit: number = 5) => ({
            url: `/api/top-sales`,
            params: {
              _limit: limit,
            },
          }),
             }),
       
      }),
})

export const { useFetchAllHitsQuery } = hitsAPI;
