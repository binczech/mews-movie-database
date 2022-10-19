import { Genre } from './genre';
import { MovieStatus } from './movie-status';
import { ProductionCompany } from './production-company';
import { ProductionCountry } from './production-country';
import { SpokenLanguage } from './spoken-language';

export type MovieDetail = Partial<{
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: MovieDetail | null,
    budget: number,
    genres: Array<Genre>,
    homepage: string | null,
    id: number,
    imdb_id: number | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies: Array<ProductionCompany>,
    production_countries: Array<ProductionCountry>,
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: Array<SpokenLanguage>,
    status: MovieStatus,
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}>
