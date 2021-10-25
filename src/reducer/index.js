import { 
  SAVE_ALL_COUNTRIES,
  CHANGE,
  SAVE_COUNTRY,
  START_MCQ,
  DOUBLE_INCREMENT,
  INCREMENT,
  SET_INPUT_STYLE,
  SET_OPTION_IS_SELECTED,
  SET_SELECTED_ID,
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
  optionIsSelected: false,
  selectedId: null,
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

      case SET_OPTION_IS_SELECTED:
        return {
          ...state,
          optionIsSelected: true,
        }

      case SET_SELECTED_ID:
        return {
          ...state,
          selectedId: action.id
        }
      default:
        return state;
    }
};

export default reducer;