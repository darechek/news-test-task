import {handleActions} from 'redux-actions';
import {SHOW_LOADER, HIDE_LOADER} from './../constants';

export const initialState = false;

export default handleActions({
    [SHOW_LOADER]: (state, action) => true,
	[HIDE_LOADER]: (state, action) => false,
}, initialState);
