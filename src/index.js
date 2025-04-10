import './reset.css';
import './style.css';

const locationName = document.querySelector('#location-name');
const fetchWeather = document.querySelector('#fetch-weather');
const weatherDataDisplay = document.querySelector('.weather-data-display');

fetchWeather.addEventListener('click', () => {
    console.log(locationName.value);

    fetchWeatherData(locationName.value);
});

// async function fetchWeatherData() {
//     const currentDate = new Date();

//     const todaysDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;

//     const fetchedData = await fetch(
//         'https://api.allorigins.win/get?url=' +
//             encodeURIComponent(
//                 `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/washington/${todaysDate}?key=LV7GDK42GAYSFKS3SEPANMFJL&include=days`
//             )
//     );

async function fetchWeatherData(location) {
    const currentDate = new Date();

    const todaysDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;

    const fetchedData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${todaysDate}?key=LV7GDK42GAYSFKS3SEPANMFJL`
    );

    const weatherData = await fetchedData.json();

    console.log(weatherData);

    console.log(weatherData.days[0].temp);

    weatherDataDisplay.textContent = weatherData.days[0].temp;
}
