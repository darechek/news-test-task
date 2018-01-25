import React, {PureComponent} from 'react';
import  './style.css';

export default class Loader extends PureComponent {
	render () {
		return (
			<div className="loader-wrapper">
				<div className="loader"></div>
			</div>
		);
	}
}
