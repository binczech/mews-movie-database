import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY, API_URL } from 'consts';

import { PageMovie, SearchMovieParams } from '../types';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    searchMovies: builder.query<PageMovie, SearchMovieParams>({
      query: ({
        include_adult,
        language,
        page,
        primary_release_year,
        query,
        region,
        year,
      }: SearchMovieParams) => ({
        url: '/search/movie',
        params: {
          api_key: API_KEY,
          include_adult,
          language,
          page,
          primary_release_year,
          query,
          region,
          year,
        },
      }),

    }),
  }),
});

export const movieReducer = movieApi.reducer;

export const {
  useSearchMoviesQuery,
} = movieApi;
