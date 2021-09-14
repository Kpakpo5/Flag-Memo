export const FETCH_ALL_COUNTRIES = 'FETCH_ALL_COUNTRIES';
export const fetchAllCountries = () => ({
  type: FETCH_ALL_COUNTRIES,
});

export const SAVE_ALL_COUNTRIES = 'SAVE_ALL_COUNTRIES';
export const saveAllCountries = (countries) => ({
  type: SAVE_ALL_COUNTRIES,
  countries,
});

export const CHANGE = 'CHANGE';
export const change = (key, value) => ({
  type: CHANGE,
  value,
  key,
});
