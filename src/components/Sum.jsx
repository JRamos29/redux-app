import React from 'react';

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

export default Sum;
