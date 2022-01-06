import { connect } from 'react-redux';
import Zone from '../../components/ZoneBar/Zone';
import { 
  fetchAllCountries,
  fetchAfricaCountries,
  fetchEuropeCountries,
  fetchAsiaCountries,
  fetchOceaniaCountries,
  fetchAmericasCountries,
  setContinent,
} from '../../actions';

const mapStateToProps = (state) => ({
  continent: state.continent,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCountries: () => {
    dispatch(fetchAllCountries());
  },
  fetchAfricaCountries: () => {
    dispatch(fetchAfricaCountries());
  },
  fetchAmericasCountries: () => {
    dispatch(fetchAmericasCountries());
  },
  fetchAsiaCountries: () => {
    dispatch(fetchAsiaCountries());
  },
  fetchEuropeCountries: () => {
    dispatch(fetchEuropeCountries());
  },
  fetchOceaniaCountries: () => {
    dispatch(fetchOceaniaCountries());
  },
  setContinent: (continent) => {
    dispatch(setContinent(continent))
  }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(Zone);