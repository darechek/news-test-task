import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import logger from 'store/logger';
import reducer from 'reducers/reducer';

const enhancers = []
const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
	const devToolsExtension = window.devToolsExtension;

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}

	middleware.push(logger);
}

const enhancer = compose(
	applyMiddleware(...middleware),
	...enhancers,
);

export default function configureStore(initialState) {
	return createStore(combineReducers({reducer}), initialState, enhancer);
}
