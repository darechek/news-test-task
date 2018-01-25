import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import moment from 'moment';

export default class NewsItem extends PureComponent {
	static propTypes = {
		newsItem: PropTypes.shape({
			title: PropTypes.string,
			date: PropTypes.string.isRequired,
			shortDescription: PropTypes.string.isRequired,
		}).isRequired
	};

	render() {
		const {newsItem} = this.props;

		return (
			<Link to={`/news/${newsItem.id}`}>
				<div className="news-item">
					<div className="news-list__article">{newsItem.title}</div>
					<div className="news-list__date">{moment(newsItem.date).format('D.MM.YYYY HH:mm')}</div>
					<div className="news-list__post">{newsItem.shortDescription}</div>
				</div>
			</Link>
		);
	}
}
