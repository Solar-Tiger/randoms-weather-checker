import './reset.css';
import './style.css';

// Get input, button and element to display weather information

const locationName = document.querySelector('#location-name');
const fetchWeather = document.querySelector('#fetch-weather');
const weatherDataDisplay = document.querySelector('.weather-data-display');

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

async function fetchWeatherData(location) {
    const currentDate = new Date();

    const todaysDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;

    const fetchedData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${todaysDate}?key=LV7GDK42GAYSFKS3SEPANMFJL`
    );

    const weatherData = await fetchedData.json();

    return weatherData;
}

async function displayWeatherData(location) {
    const fetchedWeatherData = await fetchWeatherData(location);

    console.log(fetchedWeatherData.days[0].conditions);

    const weatherIconImg = document.createElement('img');

    switch (fetchedWeatherData.days[0].conditions) {
        case (fetchedWeatherData.days[0].conditions = 'Partially cloudy'):
            weatherIconImg.src =
                '../src/assets/images/weather-condition-icons/partly_cloudy_day.svg';

            weatherDataDisplay.appendChild(weatherIconImg);
            break;
        default:
            console.log('No associated weather condition');
    }

    // weatherDataDisplay.textContent = fetchedWeatherData.days[0].temp;
}

/*  
    Relevant information for user

    1.) Conditions
    2.) Description
    3.) Feelslike, feelslikemax, feelslike min
    4.) Temp, tempmax, tempmin
*/
