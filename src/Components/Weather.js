import React from 'react';

function Weather({temp}) {

	// const [temp, setTemp] = useState('')
	// setTemp(res[0].Temperature.Imperial.Value);


	return (
		<div>
			<>
				<h2>Name of City - New York</h2>
				<h3>{temp}</h3>
				<h3>Type of Day - Sunny</h3>
			</>
		</div>
	);
}

export default Weather;
