import { connect } from 'react-redux';
import { setNextRound, reset, incrementRound } from '../../actions';
import Header from '../../components/Header';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  reset: () => {
      dispatch(reset());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
