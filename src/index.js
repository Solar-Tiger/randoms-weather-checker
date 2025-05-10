import { displayWeatherData } from './weatherApp';
import { toggleTemp, changeTempScaleDisplay } from './toggleTemp';

const locationName = document.querySelector('#location-name');
const fetchWeather = document.querySelector('#fetch-weather');
const changeTemp = document.querySelector('#change-temp');

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

changeTemp.addEventListener('click', () => {
    toggleTemp();
    changeTempScaleDisplay();
});
