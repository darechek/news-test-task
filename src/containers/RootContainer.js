import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCategoriesListRequest} from 'actions/actions';
import {getCategories, needShowCategoryLoader} from 'selectors/selectors';
import RootComponent from 'components/RootComponent/RootComponent';

const mapStateToProps = (state) => ({
	needShowLoader: needShowCategoryLoader(state),
	categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	getCategoriesListRequest
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
