import './reset.css';
import './style.css';

const locationName = document.querySelector('#location-name');
const fetchWeather = document.querySelector('#fetch-weather');
const weatherData = document.querySelector('.weather-data');

fetchWeather.addEventListener('click', () => {
    console.log(locationName.value);

    weatherData.textContent = locationName.value;
});

async function fetchWeatherData() {
    const currentDate = new Date();

    const todaysDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;

    const fetchedData = await fetch(
        'https://api.allorigins.win/get?url=' +
            encodeURIComponent(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/washington/${todaysDate}?key=LV7GDK42GAYSFKS3SEPANMFJL`
            ),
        { mode: 'cors' }
    );

    const weatherData = await fetchedData.json();

    console.log(weatherData.contents);
}

fetchWeatherData();
