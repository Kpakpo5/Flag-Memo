import {connect} from 'react-redux';

import Home from '../../components/Home';
import { fetchAllCountries } from '../../actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchAllCountries: function () {
    dispatch(fetchAllCountries());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);