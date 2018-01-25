import {handleActions} from 'redux-actions';
import {SET_DETAILED_NEWS_ITEM} from './../constants';

export const initialState = {};

export default handleActions({
    [SET_DETAILED_NEWS_ITEM]: (state, action) => action.payload.detailedNewsItem,
}, initialState);
