import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./features/countries/countries-slice";
import { countriesApi } from "./features/countries/countries-api-slice";
import quizReducer from "./features/quiz/quiz-slice";

export const store = configureStore ({
    reducer: {
        countries: countriesReducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        quiz: quizReducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware)
});


export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;