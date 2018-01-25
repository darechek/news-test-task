import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CategoriesItem from './CategoriesItem';
import Header from '../Header/Header';
import  './style.css';

export default class CategoriesList extends PureComponent {
	static propTypes = {
		categories: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired
		})).isRequired
	}

	render() {
		const {categories} = this.props;

		return (
			<div>
				<Header title="Список категорий"/>
				<ul className="category-list">
					{categories.map(category =>
						<CategoriesItem
							category={category}
							key={category.id}
						/>
					)}
				</ul>
			</div>
		)
	}
}
