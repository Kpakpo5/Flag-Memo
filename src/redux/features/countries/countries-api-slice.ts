import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Country {
    name: {
        common: string,
        official: string
    },
    capital: [string],
    translations: {
        fra: {
            common: string
        }
    },
    flags: [
        svg: string,
        png: string
    ]
}


export const countriesApi = createApi({

    reducerPath: 'countryApi',

    baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),

    endpoints: (builder) => ({
        fetchZoneCountries: builder.query<Country[], string>({
            query: (zone) => zone
        }),
        
    }),
})


export const { useFetchZoneCountriesQuery } = countriesApi;

