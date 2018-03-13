import {connect} from 'react-redux';
import {setVisibilityFilter} from '../../Redux/actions';
import Link from './Link';







const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});



// THIS FUNCTION CHANGES THE VISIBILITY OF THE TODOS
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
});



const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);


export default FilterLink
