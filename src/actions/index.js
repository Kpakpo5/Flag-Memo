export const FETCH_ALL_COUNTRIES = 'FETCH_ALL_COUNTRIES';
export const fetchAllCountries = () => ({
  type: FETCH_ALL_COUNTRIES,
});

export const FETCH_AFRICA_COUNTRIES = 'FETCH_AFRICA_COUNTRIES';
export const fetchAfricaCountries = () => ({
  type: FETCH_AFRICA_COUNTRIES,
});

export const FETCH_AMERICAS_COUNTRIES = 'FETCH_AMERICAS_COUNTRIES';
export const fetchAmericasCountries = () => ({
  type: FETCH_AMERICAS_COUNTRIES,
});

export const FETCH_ASIA_COUNTRIES = 'FETCH_ASIA_COUNTRIES';
export const fetchAsiaCountries = () => ({
  type: FETCH_ASIA_COUNTRIES,
});

export const FETCH_EUROPE_COUNTRIES = 'FETCH_EUROPE_COUNTRIES';
export const fetchEuropeCountries = () => ({
  type: FETCH_EUROPE_COUNTRIES,
});

export const FETCH_OCEANIA_COUNTRIES = 'FETCH_OCEANIA_COUNTRIES';
export const fetchOceaniaCountries = () => ({
  type: FETCH_OCEANIA_COUNTRIES,
});


export const SAVE_COUNTRIES = 'SAVE_COUNTRIES';
export const saveCountries = (countries) => ({
  type: SAVE_COUNTRIES,
  countries,
});

export const SAVE_COUNTRY = 'SAVE_COUNTRY';
export const saveCountry = (country) => ({
  type: SAVE_COUNTRY,
  country,
});

export const SET_CONTINENT = 'SET_CONTINENT';
export const setContinent = (continent) => ({
  type: SET_CONTINENT,
  continent,
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

export const INCREMENT_ROUND = 'INCREMENT_ROUND';
export const incrementRound = () => ({
  type: INCREMENT_ROUND,
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

export const GET_SELECTED_ID = 'GET_SELECTED_ID';
export const getSelectedId = (id) => ({
  type: GET_SELECTED_ID,
  id,
});

export const SET_NEXT_ROUND = 'SET_NEXT_ROUND';
export const setNextRound = () => ({
  type: SET_NEXT_ROUND,
});

export const SET_GAME_OVER = 'SET_GAME_OVER';
export const setGameOver = () => ({
  type: SET_GAME_OVER,
})

export const RESET = 'RESET';
export const reset = () => ({
  type: RESET,
});