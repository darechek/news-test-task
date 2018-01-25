import {createAction} from 'redux-actions';
import * as actions from './../constants';
import {categoriesUrl, getNewsListUrl, getDetailedNewsItemUrl} from './../api';

export const setCategoriesList = createAction(
	actions.SET_CATEGORIES_LIST,
	categories => ({categories}),
);

const startCategoriesRequest = createAction (
	actions.START_CATEGORIES_REQUEST
);

const stopCategoriesRequest = createAction (
	actions.STOP_CATEGORIES_REQUEST
);

export const getCategoriesListRequest = () => dispatch => {
	dispatch(startCategoriesRequest());
	return fetch(categoriesUrl)
		.then(response => response.json())
		.then(json => {
			dispatch(stopCategoriesRequest());
			dispatch(setCategoriesList(json.list));
		});
};

export const setNewsList = createAction(
	actions.SET_NEWS_LIST,
	news => ({news}),
);

export const setDetailedNewsItem = createAction(
	actions.SET_DETAILED_NEWS_ITEM,
	detailedNewsItem => ({detailedNewsItem}),
);

export const getDetailedNewsItemRequest  = (newsItemId) => dispatch => {
	dispatch(showLoader());
	return fetch(getDetailedNewsItemUrl(newsItemId || 0))
		.then(response => response.json())
		.then(json => {
			dispatch(hideLoader());
			dispatch(setDetailedNewsItem(json.news));
		});
};

export const showLoader = createAction(
	actions.SHOW_LOADER,
);

export const hideLoader = createAction(
	actions.HIDE_LOADER,
);

export const getNewsListRequest = (categoryId, pageNumber) => dispatch => {
	dispatch(showLoader());
	return fetch(getNewsListUrl(categoryId, pageNumber || 0))
		.then(response => response.json())
		.then(json => {
			dispatch(hideLoader());
			dispatch(setNewsList(json.list));
		});
};
