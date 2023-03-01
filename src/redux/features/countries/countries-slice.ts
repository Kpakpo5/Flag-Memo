import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country } from './countries-api-slice';

interface CountriesState {
    currentZone: string,
    currentZoneCountries: [] | Country[],
    currentCountry : Country | {}
}

const initialState: CountriesState = {
    currentZone: "all",
    currentZoneCountries: [],
    currentCountry: {}
}


export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        setCurrentZone: (state, action: PayloadAction<string>) => {
            state.currentZone = action.payload;
        },
        setCurrentZoneCountries: (state, action: PayloadAction<Country[]>) => {
            state.currentZoneCountries = action.payload;
        },
        setCurrentCountry: (state, action: PayloadAction<Country>) => {
            state.currentCountry = action.payload;
        }
    }
});


export const { setCurrentZone, setCurrentZoneCountries, setCurrentCountry } = countriesSlice.actions;

export default countriesSlice.reducer;