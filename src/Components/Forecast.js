import React from 'react';

function Forecast({ getForecast, forecast}) {
	// console.log(getForecast);
	console.log(forecast);
	return (
		<div>
			<button onClick={getForecast}>7 Day Forecast</button>
			{/* use.map */}
			<li>Monday</li>
			<li>Tuesday</li>
			<li>Wednesday</li>
			<li>Thursday</li>
			<li>Friday</li>
		</div>
	);
}

export default Forecast;
