import { connect } from 'react-redux';
import MCQ from '../../components/MCQ';

const mapStateToProps = (state) => ({
  halfRound : state.halfRound,
  currentCountry: state.currentCountry,
  inputStyle: state.inputStyle,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MCQ);