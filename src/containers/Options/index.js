import { connect } from 'react-redux';
import Options from '../../components/Options';

const mapStateToProps = (state) => ({
  currentCountry: state.currentCountry,
  countries: state.countries,
  optionSelected: state.optionSelected,

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Options);