import './Range.css';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import { changeMinNumber, changeMaxNumber } from '../store/actions/numbers';

const Range = (props) => {
	const { min, max } = props;

	return (
		<Card title="Numbers Range" red>
			<div className="Range">
				<span>
					<strong>Min:</strong>
					<input
						type="number"
						value={min}
						onChange={(e) => props.changeMin(+e.target.value)}
					/>
				</span>
				<span>
					<strong>Max:</strong>
					<input
						type="number"
						value={max}
						onChange={(e) => props.changeMax(+e.target.value)}
					/>
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

const mapDispatchToProps = (dispatch) => {
	return {
		changeMin(newNumber) {
			//action creator => action
			const action = changeMinNumber(newNumber);
			dispatch(action);
		},
		changeMax(newNumber) {
			//action creator => action
			const action = changeMaxNumber(newNumber);
			dispatch(action);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Range);
