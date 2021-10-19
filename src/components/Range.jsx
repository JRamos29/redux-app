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

const mapActionCreatorsToProps = (dispatch) => {
	return {
		changeMinNum(newNumber) {
			//action creator => action
			const action = changeMinNumber(newNumber);
			dispatch(action);
		},
	};
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(Range);
