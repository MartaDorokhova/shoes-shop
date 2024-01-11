import { baseAPI } from 'api/api';
import { HitListResponse } from '../interfaces';

export const hitsAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
        fetchAllHits: build.query<HitListResponse[], number>({
          query: () => ({
            url: `/api/top-sales`

          }),
             }),
       
      }),
})

export const { useFetchAllHitsQuery } = hitsAPI;
