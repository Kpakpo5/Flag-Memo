import { connect } from 'react-redux';
import Field from '../../components/QuizForm/Field';
import { change } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  inputValue: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: function (value) {
    dispatch(change(ownProps.name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);