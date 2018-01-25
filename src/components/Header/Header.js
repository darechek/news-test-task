import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import  './style.css';

export default class Content extends PureComponent {
	static propTypes = {
		title: PropTypes.string.isRequired,
	}

	render() {
		const {title} = this.props;

		return (
			<div
				className="header">
				{title}
			</div>
		)
	}
}
