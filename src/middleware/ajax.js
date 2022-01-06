import axios from 'axios';
import {
  FETCH_ALL_COUNTRIES,
  FETCH_AFRICA_COUNTRIES,
  FETCH_AMERICAS_COUNTRIES,
  FETCH_ASIA_COUNTRIES,
  FETCH_EUROPE_COUNTRIES,
  FETCH_OCEANIA_COUNTRIES,
  saveCountries,
} from '../actions';

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});
const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_COUNTRIES:
      api.get('/all')
        .then((response) => {
          store.dispatch(saveCountries(response.data));
        })
        .catch((error) => {

          console.log(error);
          alert('Une erreur est survenue');
        })
        .finally(() => {
          //
        });
        break;
    case FETCH_AFRICA_COUNTRIES:
      api.get('/region/africa')
        .then((response) => {
          store.dispatch(saveCountries(response.data));
        })
        .catch((error) => {

          console.log(error);
          alert('Une erreur est survenue');
        })
        .finally(() => {
          //
        });
        break;
    case FETCH_ASIA_COUNTRIES:
      api.get('/region/asia')
        .then((response) => {
          store.dispatch(saveCountries(response.data));
        })
        .catch((error) => {

          console.log(error);
          alert('Une erreur est survenue');
        })
        .finally(() => {
          //
        });
        break;
    case FETCH_AMERICAS_COUNTRIES:
      api.get('/region/americas')
        .then((response) => {
          store.dispatch(saveCountries(response.data));
        })
        .catch((error) => {

          console.log(error);
          alert('Une erreur est survenue');
        })
        .finally(() => {
          //
        });
        break;
    case FETCH_EUROPE_COUNTRIES:
      api.get('/region/europe')
        .then((response) => {
          store.dispatch(saveCountries(response.data));
        })
        .catch((error) => {

          console.log(error);
          alert('Une erreur est survenue');
        })
        .finally(() => {
          //
        });
        break;
    case FETCH_OCEANIA_COUNTRIES:
      api.get('/region/oceania')
        .then((response) => {
          store.dispatch(saveCountries(response.data));
        })
        .catch((error) => {

          console.log(error);
          alert('Une erreur est survenue');
        })
        .finally(() => {
          //
        });
        break;

      
    default:
  }

  next(action);
}

export default ajax;