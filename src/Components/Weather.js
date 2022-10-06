import React from 'react';
import Forecast from './Forecast';

function Weather({ temp, forecast, getForecast }) {
	return (
		<div>
			<>
				<h2></h2>
				<h1>{temp ? temp + '\u00b0' : ''}</h1>
				{temp ? (
					<Forecast
						className='forecastStyle'
						forecast={forecast}
						getForecast={getForecast}
					/>
				) : (
					''
				)}
			</>
		</div>
		//conditional if temp is undefined
		//render nothing else render sign
	);
}

export default Weather;
