import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country } from './countries-api-slice';

interface CountriesState {
    currentZone: string,
    currentZoneName: string,
    currentZoneCountries: Country[],
    currentCountry : Country
}

const initialState: CountriesState = {
    currentZone: "all",
    currentZoneName: "Monde",
    currentZoneCountries: [],
    currentCountry: null
}


export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        setCurrentZone: (state, action: PayloadAction<string>) => {
            state.currentZone = action.payload;
        },
        setCurrentZoneName: (state, action: PayloadAction<string>) => {
            state.currentZoneName = action.payload;
        },
        setCurrentZoneCountries: (state, action: PayloadAction<Country[]>) => {
            state.currentZoneCountries = action.payload;
        },
        setCurrentCountry: (state, action: PayloadAction<Country>) => {
            state.currentCountry = action.payload;
        },
        withdrawCurrentCountry: (state) => {
            state.currentZoneCountries = state.currentZoneCountries.filter(country => 
                country !== state.currentCountry);
            state.currentCountry = null;
        }
    }
});


export const { setCurrentZone, setCurrentZoneName, setCurrentZoneCountries, setCurrentCountry } = countriesSlice.actions;

export default countriesSlice.reducer;