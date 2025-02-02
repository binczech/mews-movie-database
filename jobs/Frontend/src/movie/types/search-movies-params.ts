export interface SearchMovieParams {
    language?: string,
    query: string,
    page: number,
    include_adult?: boolean,
    region?: string,
    year?: number,
    primary_release_year?: number,
}

export const initialSearchMovieParams: SearchMovieParams = {
  page: 1,
  query: '',
};
