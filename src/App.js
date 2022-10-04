import './App.css';
import Weather from './Components/Weather';
import Header from './Components/Header';
import Forecast from './Components/Forecast';
import ClipArt from './Components/ClipArt';
import TypeOfDay from './Components/TypeOfDay';
import { useState } from 'react';

function App() {
	const [citySearch, setCitySearch] = useState('');
	const [temp, setTemp] = useState('')
	const [weatherType, setWeatherType] = useState('')

	function fetchWeather() {
		console.log(citySearch);
		const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=KCeDcnDMsYZ7FolPQ2HzCsQI9GdvxmP5&q=${citySearch}`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(res[0].Key);
				let key = res[0].Key;
				getWeather(key);
			});
	}
	const myKey = process.env.REACT_APP_WEATHERAPI;
	// console.log(myKey);
	function getWeather(key) {
		// daily forcast key `https://dataservice.accuweather.com/forecasts/v1/daily/1day/locationKey?apikey=${myKey}&language=en-us&locationkey=${key}`;
		const url = `https://dataservice.accuweather.com/currentconditions/v1/locationKey?apikey=${myKey}&locationkey=${key}`;
		https: fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setTemp(res[0].Temperature.Imperial.Value);
				console.log(res);
				// console.log(res[0].Temperature.Imperial.Value);
				setWeatherType(res[0].WeatherText);
			});
	}

	function handleSubmit(event) {
		event.preventDefault();
		fetchWeather();
	}
	function handleChange(event) {
		setCitySearch(event.target.value);
		// console.log(event.target.value)
	}
	
	



	return (
		<div className='App'>
			<h1 className='title'>Weather App</h1>
			<Header
				citySearch={citySearch}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>

			<ClipArt />
			<Weather temp={temp} />
			<TypeOfDay weatherType={weatherType}/>
			<Forecast />
		</div>
	);
}

export default App;
