import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Country {
    name: {
        common: string,
        official: string
    },
    capital: [string],

    flags: [
        svg: string,
        png: string
    ]
}


export const countriesApi = createApi({

    reducerPath: 'countryApi',

    baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),

    endpoints: (builder) => ({

        fetchAllCountries: builder.query<Country[], string>({
            query: () => `all`,
        }),
        fetchAfricaCountries: builder.query<Country[], string>({
        query: () => `region/africa`,
        }),
        fetchAmericasCountries: builder.query<Country[], string>({
            query: () => `region/americas`,
        }),
        fetchAsiaCountries: builder.query<Country[], string>({
            query: () => `region/asia`,
        }),
        fetchEuropeCountries: builder.query<Country[], string>({
            query: () => `region/europe`,
        }),
        fetchOceaniaCountries: builder.query<Country[], string>({
            query: () => `region/oceania`,
        }),

    }),
})


export const {
    useFetchAllCountriesQuery,
    useFetchAfricaCountriesQuery,
    useFetchAmericasCountriesQuery,
    useLazyFetchAsiaCountriesQuery,
    useFetchEuropeCountriesQuery,
    useFetchOceaniaCountriesQuery
} = countriesApi;

