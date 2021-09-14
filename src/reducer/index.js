import { SAVE_ALL_COUNTRIES, CHANGE } from "../actions";

export const initialState = {
  loadingCountries: true,
  countries: [],
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
      
      case CHANGE:
        return {
          ...state,
          [action.key]: action.value,
        };

      default:
        return state;
    }
};

export default reducer;