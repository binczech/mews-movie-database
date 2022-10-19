import { Movie } from './movie';

export type PageMovie = Partial<{
    page: number,
    results: Array<Movie>,
    total_results: number,
    total_pages: number,
}>
