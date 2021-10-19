import './Range.css';
import React from 'react';

import Card from './Card';

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
						onChange={(e) => props.onChangeMin(+e.target.value)}
					/>
				</span>
				<span>
					<strong>Max:</strong>
					<input
						type="number"
						value={max}
						onChange={(e) => props.onChangeMax(+e.target.value)}
					/>
				</span>
			</div>
		</Card>
	);
};

export default Range;
