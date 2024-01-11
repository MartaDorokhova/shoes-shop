import { baseAPI } from 'api/api';
import { HitState } from '../interfaces';

export const hitsAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
        fetchAllHits: build.query<HitState[], number>({
          query: () => ({
            url: `/api/top-sales`

          }),
             }),
       
      }),
})

export const { useFetchAllHitsQuery } = hitsAPI;
