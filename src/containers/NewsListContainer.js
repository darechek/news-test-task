import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getNewsListRequest} from 'actions/actions';
import {getNews, needShowLoader, getCategoryById} from 'selectors/selectors';
import NewsList from 'components/NewsList/NewsList';

const mapStateToProps = (state, props) => ({
	news: getNews(state),
	needShowLoader: needShowLoader(state),
	category: getCategoryById(state, parseInt(props.match.params.categoryId, 10)),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	getNewsListRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
