import { connect } from 'react-redux';
import Option from '../../components/Options/Option';
import { setOptionIsSelected, increment, getSelectedId, setGameOver } from '../../actions';

const mapStateToProps = (state) => ({
  optionIsSelected : state.optionIsSelected,
  currentCountry: state.currentCountry,
  selectedId: state.selectedId,
  round: state.round,
});

const mapDispatchToProps = (dispatch) => ({
  setOptionIsSelected: () => {
    dispatch(setOptionIsSelected());
  },
  increment: () => {
    dispatch(increment());
  },
  getSelectedId : (id) => {
    dispatch(getSelectedId(id));
  },
  setGameOver: () => {
    dispatch(setGameOver());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Option);