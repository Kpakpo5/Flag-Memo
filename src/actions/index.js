export const FETCH_ALL_COUNTRIES = 'FETCH_ALL_COUNTRIES';
export const fetchAllCountries = () => ({
  type: FETCH_ALL_COUNTRIES,
});

export const SAVE_ALL_COUNTRIES = 'SAVE_ALL_COUNTRIES';
export const saveAllCountries = (countries) => ({
  type: SAVE_ALL_COUNTRIES,
  countries,
});

export const SAVE_COUNTRY = 'SAVE_COUNTRY';
export const saveCountry = (country) => ({
  type: SAVE_COUNTRY,
  country,
});

export const CHANGE = 'CHANGE';
export const change = (value) => ({
  type: CHANGE,
  value,
});

export const START_MCQ = 'START_MCQ';
export const startMCQ = () => ({
  type: START_MCQ,
});

export const INCREMENT = 'INCREMENT';
export const increment = () => ({
  type: INCREMENT,
});

export const DOUBLE_INCREMENT = 'DOUBLE_INCREMENT';
export const doubleIncrement = () => ({
  type: DOUBLE_INCREMENT,
});

export const SET_INPUT_STYLE = 'SET_INPUT_STYLE';
export const setInputStyle = (style) => ({
  type: SET_INPUT_STYLE,
  style,
});

export const SET_OPTION_IS_SELECTED = 'SET_OPTION_IS_SELECTED';
export const setOptionIsSelected = () => ({
  type: SET_OPTION_IS_SELECTED,
});

export const SET_SELECTED_ID = 'SET_SELECTED_ID';
export const setSelectedId = (id) => ({
  type: SET_SELECTED_ID,
  id,
})