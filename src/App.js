import React, { PureComponent } from 'react';
import {Provider} from 'react-redux';
import configureStore from 'store/configureStore';
import RootContainer from './containers/RootContainer';
import './App.css';

const store = configureStore({});

class App extends PureComponent {
	
	render() {
		return (
			<Provider store={store}>
				<RootContainer />
			</Provider>
		);
	}
}

export default App;
