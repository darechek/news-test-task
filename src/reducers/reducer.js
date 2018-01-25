import {combineReducers} from 'redux';
import categories from './categories';
import news from './news';
import loader from './loader';
import detailedNewsItem from './detailedNewsItem';

export default combineReducers({
	categories,
	news,
	needShowLoader: loader,
	detailedNewsItem,
});
