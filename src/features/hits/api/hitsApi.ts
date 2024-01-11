import { baseAPI } from 'api/api';
import { HitState } from '../interfaces';

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
