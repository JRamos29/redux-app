import './Range.css';
import React from 'react';

import Card from './Card';

const Range = (props) => {
	return (
		<Card title="Numbers Range" red>
			<div className="Range">
				<span>
					<strong>Min:</strong>
					<input type="number" value={0} readOnly />
				</span>
				<span>
					<strong>Max:</strong>
					<input type="number" value={10} readOnly />
				</span>
			</div>
		</Card>
	);
};

export default Range;
