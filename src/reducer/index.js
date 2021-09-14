import { SAVE_ALL_COUNTRIES, CHANGE, SAVE_COUNTRY } from "../actions";

export const initialState = {
  loadingCountries: true,
  countries: [],
  inputValue:"",
  currentCountry: {},
  roundStarted: false,
  round : 0,
  gameStarted: false,
  gameOver: false,
  alreadyOut: [],
  countryAnswer: "",
  capitalOptions: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case SAVE_ALL_COUNTRIES:
        return {
          ...state,
          countries: action.countries,
          loadingCountries: false,
        };
      
      case SAVE_COUNTRY:
        return {
          ...state,
          currentCountry: action.country,
        }

      case CHANGE:
        return {
          ...state,
          inputValue: action.value,
        };

      default:
        return state;
    }
};

export default reducer;