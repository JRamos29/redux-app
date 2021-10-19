import './Range.css';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Range = (props) => {
	const { min, max } = props;

	return (
		<Card title="Numbers Range" red>
			<div className="Range">
				<span>
					<strong>Min:</strong>
					<input type="number" value={min} readOnly />
				</span>
				<span>
					<strong>Max:</strong>
					<input type="number" value={max} readOnly />
				</span>
			</div>
		</Card>
	);
};

const mapStateToProps = (state) => {
	return {
		min: state.numbers.min,
		max: state.numbers.max,
	};
};

export default connect(mapStateToProps)(Range);
