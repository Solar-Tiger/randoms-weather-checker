import { displayWeatherData, changeTempScale } from './weatherApp';

const locationName = document.querySelector('#location-name');
const getWeather = document.querySelector('#get-weather');

// Event listener for button click to fetch weather data
getWeather.addEventListener('click', () => {
    displayWeatherData(locationName.value);
});

// Event listener for enter key to fetch weather data
locationName.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return;

    e.preventDefault();

    displayWeatherData(locationName.value);
});

changeTempScale();
