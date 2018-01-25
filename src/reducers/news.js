import {handleActions} from 'redux-actions';
import {SET_NEWS_LIST} from './../constants';

export const initialState = [];

export default handleActions({
    [SET_NEWS_LIST]: (state, action) => action.payload.news,
}, initialState);
