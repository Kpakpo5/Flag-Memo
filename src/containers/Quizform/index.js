import { connect } from 'react-redux';
import QuizForm from '../../components/QuizForm';
import { change } from '../../actions';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  currentCountry: state.currentCountry,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: function (value) {
    dispatch(change(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);