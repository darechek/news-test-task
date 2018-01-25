import {connect} from 'react-redux';
import {getNews} from 'selectors/selectors';
import Pagination from 'components/Pagination/Pagination';

const mapStateToProps = (state) => ({
    news: getNews(state),
});

export default connect(mapStateToProps)(Pagination);
