import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./features/countries/countries-slice";
import { countriesApi } from "./features/countries/countries-api-slice";

export const store = configureStore ({
    reducer: {
        countries: countriesReducer,
        [countriesApi.reducerPath]: countriesApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware)
});


export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;