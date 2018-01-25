import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

export default class CategoriesItem extends PureComponent {
	static propTypes = {
		category: PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired
		}).isRequired
	}

	render() {
		const {category} = this.props;

		return (
				<li className="category-list__item">
					<Link className="category-list__link" to={`/categories/${category.id}`}>
						{category.name}
					</Link>
				</li>
		)
	}
}
