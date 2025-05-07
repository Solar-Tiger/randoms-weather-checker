import { displayWeatherData } from './weatherApp';
import { toggleTemp } from './toggleTemp';

const locationName = document.querySelector('#location-name');
const fetchWeather = document.querySelector('#fetch-weather');

// Event listener for button click

fetchWeather.addEventListener('click', () => {
    displayWeatherData(locationName.value);
});

// Event listener for enter key

locationName.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return;

    e.preventDefault();

    displayWeatherData(locationName.value);
});

toggleTemp();
