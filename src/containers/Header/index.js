import { connect } from 'react-redux';
import { reset, fetchAllCountries, setContinent } from '../../actions';
import Header from '../../components/Header';

const mapStateToProps = (state) => ({
  round: state.round,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => {
      dispatch(reset());
  },
  fetchAllCountries: function () {
    dispatch(fetchAllCountries());
  },
  setContinent: function (continent) {
    dispatch(setContinent(continent));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
