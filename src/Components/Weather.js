import React from 'react';

function Weather({ temp }) {
	return (
		<div>
			<>
				<h2></h2>
				<h3>
					{temp}
					{'\u00b0'}
				</h3>
			</>
		</div>
	);
}

export default Weather;
