import { connect } from 'react-redux';
import { setNextRound, reset } from '../../actions';
import Button from '../../components/Button';

const mapStateToProps = (state) => ({
    optionIsSelected : state.optionIsSelected,
    countries: state.countries,
});

const mapDispatchToProps = (dispatch) => ({
  setNextRound: () => {
    dispatch(setNextRound());
  },
  reset: () => {
      dispatch(reset());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
