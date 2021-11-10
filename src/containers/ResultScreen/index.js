import { connect } from 'react-redux';
import ResultScreen from '../../components/ResultScreen';

const mapStateToProps = (state) => ({
  score: state.score,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen);
