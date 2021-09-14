import { connect } from 'react-redux';
import { saveCountry } from '../../actions';
import QuizScreen from '../../components/QuizScreen';

const mapStateToProps = (state) => ({
  countries: state.countries,
});

const mapDispatchToProps = (dispatch) => ({
  saveCountry: (country) => {
    dispatch(saveCountry(country));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
