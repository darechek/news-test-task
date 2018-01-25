import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Loader from './../Loader/Loader';
import NewsItem from './NewsItem';
import Header from '../Header/Header';
import PaginationContainer from '../../containers/PaginationContainer';
import './style.css';

export default class NewsList extends PureComponent {
	static propTypes = {
		needShowLoader: PropTypes.bool.isRequired,
		getNewsListRequest: PropTypes.func.isRequired,
		news: PropTypes.array.isRequired,
		category: PropTypes.object,
	};

	componentDidMount() {
		const {categoryId, pageNumber} = this.props.match.params;
		this.props.getNewsListRequest(categoryId, pageNumber);
	}

	componentWillReceiveProps(nextProps) {
		const {categoryId, pageNumber} = this.props.match.params;
		const {pageNumber: nextPageNumber, categoryId: nextCategoryId} = nextProps.match.params;  // если категорию выбирать, то тоже не будет undefined
		if (pageNumber !== nextPageNumber || categoryId !== nextCategoryId) {
			this.props.getNewsListRequest(nextCategoryId, nextPageNumber);
		}
	}

	render() {
		const {needShowLoader, news, category} = this.props;

		return (
			<div>
				{category ?
					<Header title={category.name}/>
					: null
				}
				<Link className="link link--go-back" to="/categories">К списку категорий</Link>
				<PaginationContainer />
				{needShowLoader ?
					<Loader />
					:
					<div className="news-list">
						{news.map(newsItem =>
							<NewsItem
								newsItem={newsItem}
								key={newsItem.id}
							/>
						)}
					</div>
				}
				<PaginationContainer />
			</div>
		)
	}
}
