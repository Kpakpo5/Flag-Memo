import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CountriesState {
    currentZone: string,
    currentZoneCountries: [],
    currentCountry : {}
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
        setCurrentZone: (state, action) => {
            state.currentZone = action.payload;
        },
        setCurrentZoneCountries: (state, action) => {
            state.currentZoneCountries = action.payload;
        },
        setCurrentCountry: (state, action) => {
            state.currentCountry = action.payload;
        }
    }
});


export const { setCurrentZone, setCurrentZoneCountries, setCurrentCountry } = countriesSlice.actions;

export default countriesSlice.reducer;