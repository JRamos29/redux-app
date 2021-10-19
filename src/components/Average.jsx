import React from 'react';

import Card from './Card';

const Average = (props) => {
	const { min, max } = props;

	return (
		<Card title="Average" green>
			<div>
				<span>
					<span>Result: </span>
					<strong>{(max + min) / 2}</strong>
				</span>
			</div>
		</Card>
	);
};

export default Average;
