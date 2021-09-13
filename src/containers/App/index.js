import {connect} from 'react-redux';

import App from '../../components/App';
import { fetchAllCountries } from '../../actions';

const mapStateToProps = (state) => ({
  loadingCountries: state.loadingCountries,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCountries: function () {
    dispatch(fetchAllCountries());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
