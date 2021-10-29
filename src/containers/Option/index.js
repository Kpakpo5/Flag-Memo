import { connect } from 'react-redux';
import Option from '../../components/Options/Option';
import { setOptionIsSelected, increment, getSelectedId } from '../../actions';

const mapStateToProps = (state) => ({
  optionIsSelected : state.optionIsSelected,
  currentCountry: state.currentCountry,
  selectedId: state.selectedId,
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
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Option);