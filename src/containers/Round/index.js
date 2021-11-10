import {connect} from 'react-redux';

import Round from '../../components/Round';

const mapStateToProps = (state) => ({
  round: state.round,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Round);
