import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import  './style.css';

class Pagination extends PureComponent {
	static propTypes = {
		news: PropTypes.array.isRequired,
	};

	render() {
		const {categoryId, pageNumber} = this.props.match.params;
		const {news} = this.props;

		return (
			<div className="pagination">
				{parseInt(pageNumber, 10) > 0 ? 
					<Link
						className="pagination__link"
						to={`/categories/${categoryId}/${parseInt(pageNumber, 10) - 1 >= 0 ? parseInt(pageNumber, 10) - 1 : 0}`}
					>
						Назад
					</Link>
					:
					null
				}

				{news.length < 10 ? null : 
					<Link
						className="pagination__link"
						to={`/categories/${categoryId}/${(parseInt(pageNumber, 10) || 0) + 1}`}
					>
						Вперед
					</Link>
				}
			</div>
		)
	}
}

export default withRouter(Pagination);
