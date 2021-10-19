import React from 'react';

import Card from './Card';

export default (props) => {
	return (
		<Card title="Average" green>
			<div>
				<span>
					<span>Result:</span>
					<strong>5</strong>
				</span>
			</div>
		</Card>
	);
};
