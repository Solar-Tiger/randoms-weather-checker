import './style.css';
import './reset.css';

const locationName = document.querySelector('#location-name');
const fetchWeather = document.querySelector('#fetch-weather');
const weatherData = document.querySelector('.weather-data');

fetchWeather.addEventListener('click', () => {
    console.log(locationName.value);

    weatherData.textContent = locationName.value;
});
