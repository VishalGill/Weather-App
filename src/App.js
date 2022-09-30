import './App.css';
import Weather from './Components/Weather';
import Header from './Components/Header';

function App() {
	return (
		<div className='App'>
			<h1>Weather App</h1>
			<Header />

			<Weather />
		</div>
	);
}

export default App;