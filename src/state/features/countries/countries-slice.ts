import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CountriesState {
    currentZoneCountries: [],
    currentCountry : {}
}

const initialState: CountriesState = {
    currentZoneCountries: [],
    currentCountry: {}
}


export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        getCurrentZoneCountries: (state, action) => {
            state.currentZoneCountries = action.payload;
        },
        setCurrentCountry: (state, action) => {
            state.currentCountry = action.payload;
        }
    }
});


export const { getCurrentZoneCountries, setCurrentCountry } = countriesSlice.actions;

export default countriesSlice.reducer;