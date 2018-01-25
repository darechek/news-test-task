import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDetailedNewsItemRequest} from 'actions/actions';
import {getDetailedNewsItem, needShowLoader, getNewsById} from 'selectors/selectors';
import DetailedNewsItem from 'components/NewsList/DetailedNewsItem';

const mapStateToProps = (state, props) => ({
	needShowLoader: needShowLoader(state),
	detailedNewsItem: getDetailedNewsItem(state),
	newsItem: getNewsById(state, parseInt(props.match.params.newsItemId, 10)) || {},
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	getDetailedNewsItemRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailedNewsItem);
