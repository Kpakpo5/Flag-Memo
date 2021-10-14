import { 
  SAVE_ALL_COUNTRIES,
  CHANGE,
  SAVE_COUNTRY,
  START_MCQ,
  DOUBLE_INCREMENT,
  INCREMENT,
  SET_INPUT_STYLE
} from "../actions";

export const initialState = {
  loadingCountries: true,
  countries: [],
  inputValue:"",
  inputStyle: "default",
  currentCountry: {},
  roundStarted: false,
  round : 0,
  halfRound: false,
  gameStarted: false,
  gameOver: false,
  score: 0,
  optionSelected: false,
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

      default:
        return state;
    }
};

export default reducer;