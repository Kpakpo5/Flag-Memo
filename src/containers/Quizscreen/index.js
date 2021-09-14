import { connect } from 'react-redux';

import QuizScreen from '../../components/QuizScreen';

const mapStateToProps = (state) => ({
    countries: state.countries,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
