import React from 'react';

function Weather({ temp }) {
	return (
		<div>
			<>
				<h2></h2>
				<h1>
					{temp ? temp + '\u00b0' : ''}
				</h1>
			</>
		</div>
		//conditional if temp is undefined
		//render nothing else render sign
	);
}

export default Weather;
