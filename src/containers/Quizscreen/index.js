import { connect } from 'react-redux';
import { saveCountry, reset, setContinent } from '../../actions';
import QuizScreen from '../../components/QuizScreen';

const mapStateToProps = (state) => ({
  countries: state.countries,
});

const mapDispatchToProps = (dispatch) => ({
  saveCountry: (country) => {
    dispatch(saveCountry(country));
  },
  reset: () => {
    dispatch(reset());
  },
  setContinent: (continent) => {
    dispatch(setContinent(continent));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
