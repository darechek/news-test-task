import {handleActions} from 'redux-actions';
import {SET_CATEGORIES_LIST, START_CATEGORIES_REQUEST, STOP_CATEGORIES_REQUEST} from './../constants';

export const initialState = {
    list: [],
    isFetching: false,
};

export default handleActions({
    [SET_CATEGORIES_LIST]: (state, action) =>({
        ...state,
        list: action.payload.categories,
    }), 
    [START_CATEGORIES_REQUEST]: (state, action) =>({
        ...state,
        isFetching: true,
    }), 
    [STOP_CATEGORIES_REQUEST]: (state, action) =>({
        ...state,
        isFetching: false,
    }), 
    
}, initialState);
