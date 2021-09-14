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
})


export const CHANGE = 'CHANGE';
export const change = (value) => ({
  type: CHANGE,
  value,
});
