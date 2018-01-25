import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loader from './../Loader/Loader';
import Header from './../Header/Header';
import CategoriesListContainer from '../../containers/CategoriesListContainer';
import NewsListContainer from '../../containers/NewsListContainer';
import DetailedNewsItemContainer from '../../containers/DetailedNewsItemContainer';

export default class RootComponent extends PureComponent {
	static propTypes = {
		needShowLoader: PropTypes.bool.isRequired,
		getCategoriesListRequest: PropTypes.func.isRequired,
	}

	componentDidMount() {
		this.props.getCategoriesListRequest();
	}

	render() {
		const {needShowLoader} = this.props;
		return (
			 <div>
				{needShowLoader ?
					<Loader />
					:
					<div className="App">
						<Header class="app-title" title="Новости"/>
						<Router>
							<Switch>
								<Route exact path="/" component={CategoriesListContainer}/>
								<Route exact path="/categories" component={CategoriesListContainer}/>
								<Route path="/categories/:categoryId/:pageNumber?" component={NewsListContainer}/>
								<Route path="/news/:newsItemId?" component={DetailedNewsItemContainer}/>
							</Switch>
						</Router>
					</div>
				}
			</div>
		);
	}
}
