import React from 'react';

function Forecast({ getForecast, forecast}) {
	// console.log(getForecast);
	console.log(forecast);
	return (
		<div>
			<button className='forecastButton' onClick={getForecast}>
				5 Day Forecast
			</button>
			{forecast.map((result) => (
				<li>
					{'Date: ' +
						result.Date[5] +
						result.Date[6] +
						'/' +
						result.Date[8] +
						result.Date[9] +
						'    - '}
					{'High: ' + result.Temperature.Maximum.Value}
					{' | Low: ' + result.Temperature.Minimum.Value}
					{' - ' + result.Day.IconPhrase}
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
