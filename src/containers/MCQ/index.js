import { connect } from 'react-redux';
import MCQ from '../../components/MCQ';

const mapStateToProps = (state) => ({
  halfRound : state.halfRound,
  currentCountry: state.currentCountry,
  inputStyle: state.inputStyle,
  inputValue: state.inputValue,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MCQ);