import {persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import { 
  SAVE_COUNTRIES,
  CHANGE,
  SAVE_COUNTRY,
  SET_CONTINENT,
  START_MCQ,
  DOUBLE_INCREMENT,
  INCREMENT,
  SET_INPUT_STYLE,
  SET_OPTION_IS_SELECTED,
  GET_SELECTED_ID,
  SET_NEXT_ROUND,
  RESET,
  INCREMENT_ROUND,
  SET_GAME_OVER,
} from "../actions";

const persistConfig = {
  key: 'root',
  storage: storageSession,
}

export const initialState = {
  loadingCountries: true,
  countries: [],
  inputValue:"",
  inputStyle: "",
  currentCountry: {},
  continent: "Monde",
  round : 0,
  halfRound: false,
  gameOver: false,
  score: 0,
  optionIsSelected: false,
  selectedId: null,
};



const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case SAVE_COUNTRIES:
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

      case SET_CONTINENT:
        return {
          ...state,
          continent: action.continent,
        }

      case INCREMENT_ROUND:
        return {
          ...state,
          round: state.round +1,
        }
      
      case CHANGE:
        return {
          ...state,
          inputValue: action.value,
        };
      
      case START_MCQ:
        return {
          ...state,
          halfRound: true,
        }
      
      case INCREMENT:
        return {
          ...state,
          score: state.score +1,
        }
      
      case DOUBLE_INCREMENT:
        return {
          ...state,
          score: state.score +2,
        }
      
      case SET_INPUT_STYLE:
        return {
          ...state,
          inputStyle: action.style,
        }

      case SET_OPTION_IS_SELECTED:
        return {
          ...state,
          optionIsSelected: true,
        }

      case GET_SELECTED_ID:
        return {
          ...state,
          selectedId: action.id
        }

      case SET_NEXT_ROUND:
        return {
          ...state,
          countries: state.countries.filter(country => 
            country.name.common !== state.currentCountry.name.common),
          inputValue:"",
          inputStyle: "default",
          currentCountry: {},
          halfRound: false,
          optionIsSelected: false,
          selectedId: null,
        }

      case SET_GAME_OVER:
        return {
          ...state,
          gameOver: true,
        }
      
      case RESET:
        return {
          ...state,
          loadingCountries: true,
          inputValue:"",
          inputStyle: "default",
          currentCountry: {},
          round : 0,
          halfRound: false,
          gameOver: false,
          score: 0,
          optionIsSelected: false,
          selectedId: null,
        }
      default:
        return state;
    }
};

export default persistReducer(persistConfig, reducer);