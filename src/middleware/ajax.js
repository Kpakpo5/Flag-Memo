import axios from 'axios';
import { FETCH_ALL_COUNTRIES, saveAllCountries } from '../actions';

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
  });
  const ajax = (store) => (next) => (action) => {
    switch (action.type) {
      case FETCH_ALL_COUNTRIES:
        api.get('/all')
          .then((response) => {
            console.log(response);
            store.dispatch(saveAllCountries(response.data));
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