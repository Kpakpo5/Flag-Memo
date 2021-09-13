import { SAVE_ALL_COUNTRIES } from "../actions";

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

      default:
        return state;
    }
};

export default reducer;