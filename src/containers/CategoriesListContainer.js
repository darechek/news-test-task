import {connect} from 'react-redux';
import {getCategories, needShowLoader} from 'selectors/selectors';
import CategoriesList from 'components/Categories/CategoriesList';

const mapStateToProps = (state) => ({
	needShowLoader: needShowLoader(state),
	categories: getCategories(state),
});

export default connect(mapStateToProps)(CategoriesList);
