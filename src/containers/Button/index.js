import { connect } from 'react-redux';
import { setNextRound, reset, incrementRound, setContinent } from '../../actions';
import Button from '../../components/Button';

const mapStateToProps = (state) => ({
    optionIsSelected : state.optionIsSelected,
    loadingCountries: state.loadingCountries,
    gameOver: state.gameOver,
});

const mapDispatchToProps = (dispatch) => ({
  setNextRound: () => {
    dispatch(setNextRound());
  },
  reset: () => {
      dispatch(reset());
  },
  incrementRound: () => {
    dispatch(incrementRound());
  },
  setContinent: (continent) => {
    dispatch(setContinent(continent))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
