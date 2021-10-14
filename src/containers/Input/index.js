import { connect } from 'react-redux';
import Input from '../../components/Input';
import { change } from '../../actions';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  halfRound: state.halfRound,
  inputStyle: state.inputStyle,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: function (value) {
    dispatch(change(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);