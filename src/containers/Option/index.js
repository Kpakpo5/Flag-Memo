import { connect } from 'react-redux';
import Option from '../../components/Options/Option';
import { setOptionIsSelected, increment, setSelectedId } from '../../actions';

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
  setSelectedId : (id) => {
    dispatch(setSelectedId(id));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Option);