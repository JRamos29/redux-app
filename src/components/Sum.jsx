import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Sum = (props) => {
	const { min, max } = props;

	return (
		<Card title="Sum" blue>
			<div>
				<span>
					<span>Result: </span>
					<strong>{max + min}</strong>
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

export default connect(mapStateToProps)(Sum);
