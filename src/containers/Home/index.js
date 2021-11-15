import {connect} from 'react-redux';

import Home from '../../components/Home';
import { fetchAllCountries, reset } from '../../actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchAllCountries: function () {
    dispatch(fetchAllCountries());
  },
  reset: () => {
    dispatch(reset());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);