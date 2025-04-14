import './reset.css';
import './style.css';

const locationName = document.querySelector('#location-name');
const fetchWeather = document.querySelector('#fetch-weather');
const weatherDataDisplay = document.querySelector('.weather-data-display');

fetchWeather.addEventListener('click', () => {
    console.log(locationName.value);

    fetchWeatherData(locationName.value);
});

locationName.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return;

    e.preventDefault();

    fetchWeatherData(locationName.value);
});

async function fetchWeatherData(location) {
    const currentDate = new Date();

    const todaysDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;

    const fetchedData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${todaysDate}?key=LV7GDK42GAYSFKS3SEPANMFJL`
    );

    const weatherData = await fetchedData.json();

    console.log(weatherData.days[0]);

    console.log(weatherData.days[0].temp);

    weatherDataDisplay.textContent = weatherData.days[0].temp;
}
