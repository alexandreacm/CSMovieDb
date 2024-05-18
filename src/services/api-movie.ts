import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDetailMovie, IResponseMovie } from '../models';

export const movieApi = createApi({
    reducerPath: 'imdb',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com/' }),
    endpoints: (builder) => ({
        getMovieByTitle: builder.query<IResponseMovie, string>({
            query: (title) => `?apikey=3dd8a625&s=${title}&page=1`
        }),
        getMovieById: builder.query<IDetailMovie, string>({
            query: (id) => `?i=${id}&apikey=3dd8a625`
        })
    })
})

export const {
    useGetMovieByTitleQuery,
    useGetMovieByIdQuery } = movieApi;