import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const deezerApi = createApi({
    reducerPath: 'deezerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://youtube-music-api3.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'acb84a2863msh3bf053006b8b60ep1dd93djsne1bcdf82959d');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getRecommended: builder.query({
            query: () => '/recommend'
        }) 
    })
})

export const {
    useGetRecommendedQuery
} = deezerApi;