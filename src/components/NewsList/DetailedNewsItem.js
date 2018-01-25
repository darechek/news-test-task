import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Loader from './../Loader/Loader';

export default class DetailedNewsItem extends PureComponent {
	static propTypes = {
		needShowLoader: PropTypes.bool.isRequired,
		newsItem: PropTypes.object.isRequired,
		getDetailedNewsItemRequest: PropTypes.func.isRequired,
		detailedNewsItem: PropTypes.object.isRequired,
	};

	componentDidMount() {
		const {newsItemId} = this.props.match.params;
		this.props.getDetailedNewsItemRequest(newsItemId);
	}

	render() {
		const {needShowLoader, newsItem, detailedNewsItem, history} = this.props;

		return (
			<div>
				<div className="news-list">
					<div className="button-wrapper"><button className="button" onClick={history.goBack}>Назад</button></div>
					<div className="news-item">
						<div className="news-list__article">{newsItem.title || detailedNewsItem.title}</div>
						<div className="news-list__date">{moment(newsItem.date || detailedNewsItem.date).format('D.MM.YYYY HH:mm')}</div>
						<div className="news-list__post">{newsItem.shortDescription || detailedNewsItem.shortDescription}</div>
						{needShowLoader ? 
							<Loader />
							:
							<div className="news-list__post" dangerouslySetInnerHTML={{__html: detailedNewsItem.fullDescription}}/>
						}
					</div>	
				</div>
			</div>
		);
	}
}
