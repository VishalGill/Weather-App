import React from 'react';

function Forecast({ getForecast, forecast}) {
	// console.log(getForecast);
	console.log(forecast);
	return (
		<div>
			<button onClick={getForecast}>5 Day Forecast</button>
			{forecast.map((result) => (
				<li>
					{'Daily High: ' + result.Temperature.Maximum.Value}
					{' Daily Low:' + result.Temperature.Minimum.Value}
					{' ' + result.Day.IconPhrase }
				</li>
			))}
			{/* {forecast.map((result) => (
				<li>{result.Temperature.Minimum.Value}</li>
			))} */}
			{/* use.map */}
			{/* <li>Monday</li>
			<li>Tuesday</li>
			<li>Wednesday</li>
			<li>Thursday</li>
			<li>Friday</li> */}
		</div>
	);
}

export default Forecast;
