import React from 'react';

import Card from './Card';

const Random = (props) => {
	const { min, max } = props;

	const randomNumber = parseInt(Math.random() * (max - min)) + min;

	return (
		<Card title="Random" purple>
			<div>
				<span>
					<span>Result: </span>
					<strong>{randomNumber}</strong>
				</span>
			</div>
		</Card>
	);
};

export default Random;
