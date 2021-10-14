import { connect } from 'react-redux';
import QuizForm from '../../components/QuizForm';
import { startMCQ, doubleIncrement, setInputStyle } from '../../actions';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  currentCountry: state.currentCountry,
  halfRound: state.halfRound,
});

const mapDispatchToProps = (dispatch) => ({
  startMCQ: () => {
    dispatch(startMCQ());
  },
  doubleIncrement: () => {
    dispatch(doubleIncrement());
  },
  setInputStyle : (style) => {
    dispatch(setInputStyle(style));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);