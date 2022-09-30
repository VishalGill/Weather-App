import './App.css';
import Weather from './Components/Weather';
import Header from './Components/Header';
import Forecast from './Components/Forecast';

function App() {
	return (
		<div className='App'>
			<h1>Weather App</h1>
			<Header />

			<Weather />
			<Forecast />
		</div>
	);
}

export default App;
