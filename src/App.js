import './App.css';
import Weather from './Components/Weather';
import Header from './Components/Header';
import Forecast from './Components/Forecast';
import ClipArt from './Components/ClipArt';
import TypeOfDay from './Components/TypeOfDay';
import CityName from './Components/CityName';
import { useState, useEffect } from 'react';

function App() {
	const [citySearch, setCitySearch] = useState('');
	const [temp, setTemp] = useState('');
	const [weatherType, setWeatherType] = useState('');
	const [city, setCity] = useState('');
	const [locationKey, setLocationKey] = useState('');
	const [forecast, setForecast] = useState([]);

	function fetchWeather() {
		// console.log(citySearch);
		const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=KCeDcnDMsYZ7FolPQ2HzCsQI9GdvxmP5&q=${citySearch}`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				// console.log(res[0]);
				setCity(res[0].EnglishName);
				setLocationKey(res[0].Key);
				// let key = res[0].Key;
				// getWeather(key);
				console.log(locationKey);
				getWeather();
			});
	}
	const myKey = process.env.REACT_APP_WEATHERAPI;
	// console.log(myKey);
	useEffect(() => {
		fetchWeather();
		getWeather();
	}, [locationKey]);

	function getWeather() {
		const urll = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey?apikey=${myKey}&LocationKey=${locationKey}`;
		const url = `https://dataservice.accuweather.com/currentconditions/v1/locationKey?apikey=${myKey}&locationkey=${locationKey}`;
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				// citySearch(res)
				// console.log(res);
				// setCity(res[0].EnglishName);
				// console.log(res[0].PrimaryPostalCode);
				setTemp(res[0].Temperature.Imperial.Value);
				// console.log(res);
				// console.log(res[0]);
				setWeatherType(res[0].WeatherText);
			});
	}

	// const myKeyy = process.env.REACT_APP_WEATHERAPI
	function getForecast() {
		const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey?apikey=${myKey}&LocationKey=${locationKey}`;
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				// citySearch(res)
				console.log(res);
				setForecast(res.DailyForecasts);
			});
	}

	//2 helper functions
	//1 help function 1 component
	//helper funct

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
				className='headerStyle'
				citySearch={citySearch}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>

			<ClipArt />
			<CityName className='cityName' city={city} />
			<TypeOfDay className='typeOfDay' weatherType={weatherType} />
			<Weather
				className='weatherStyle'
				temp={temp}
				forecast={forecast}
				getForecast={getForecast}
			/>
			{/* <Forecast
				className='forecastStyle'
				forecast={forecast}
				getForecast={getForecast}
			/> */}
		</div>
	);
}

export default App;
