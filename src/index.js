import './reset.css';
import './style.css';
import clearDay from './assets/images/weather-condition-icons/clear-day.svg';
import clearNight from './assets/images/weather-condition-icons/clear-night.svg';
import cloudy from './assets/images/weather-condition-icons/cloudy.svg';
import fog from './assets/images/weather-condition-icons/fog.svg';
import partlyCloudyDay from './assets/images/weather-condition-icons/partly-cloudy-day.svg';
import partylyCloudyNight from './assets/images/weather-condition-icons/partly-cloudy-night.svg';
import rain from './assets/images/weather-condition-icons/rain.svg';
import snow from './assets/images/weather-condition-icons/snow.svg';
import wind from './assets/images/weather-condition-icons/wind.svg';

// Get input, button and element to display weather information

const locationName = document.querySelector('#location-name');
const fetchWeather = document.querySelector('#fetch-weather');
const weatherInformationBox = document.querySelector(
    '.weather-information-box'
);

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

// Fetches and returns weather data JSON
async function fetchWeatherData(location) {
    const currentDate = new Date();

    const todaysDate = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;

    const fetchedData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${todaysDate}?key=LV7GDK42GAYSFKS3SEPANMFJL`
    );

    const weatherData = await fetchedData.json();

    return weatherData;
}

// Displays fetched weather data using location name
async function displayWeatherData(location) {
    const fetchedWeatherData = await fetchWeatherData(location);

    weatherInformationBox.textContent = '';

    displayWeatherLocation(fetchedWeatherData);
}

function displayCurrentWeatherIcon(weatherIcon, weatherCurrentTemp) {
    const weatherTempDisplay = document.createElement('div');

    weatherTempDisplay.classList.add('temperature-container');

    const weatherIcons = {
        'clear-day': clearDay,
        'clear-night': clearNight,
        cloudy: cloudy,
        fog: fog,
        'partly-cloudy-day': partlyCloudyDay,
        'partly-cloudy-night': partylyCloudyNight,
        rain: rain,
        snow: snow,
        wind: wind
    };

    const weatherIconImg = document.createElement('img');

    weatherIconImg.src = weatherIcons[weatherIcon];
    weatherIconImg.width = '70';
    weatherIconImg.height = '70';

    const weatherCurrentTempDisplay = document.createElement('p');

    weatherCurrentTempDisplay.classList.add('current-temperature');
    weatherCurrentTempDisplay.textContent = weatherCurrentTemp;

    weatherTempDisplay.append(weatherIconImg, weatherCurrentTempDisplay);

    return weatherTempDisplay;
}

function displayWeatherLocationName(locationName) {
    const nameDisplay = document.createElement('p');

    nameDisplay.classList.add('weather-location');
    nameDisplay.textContent = locationName;

    return nameDisplay;
}

async function displayWeatherLocation(location) {
    const locationName = displayWeatherLocationName(location.resolvedAddress);

    const weatherTempDisplay = displayCurrentWeatherIcon(
        location.days[0].icon,
        location.days[0].temp
    );

    // Create weather min and max display
    const weatherTempAndConditionsDisplay = document.createElement('div');

    weatherTempAndConditionsDisplay.classList.add('temp-and-conditions');

    const weatherMaxAndMin = document.createElement('div');
    const weatherMax = document.createElement('div');
    const weatherMin = document.createElement('div');

    weatherMaxAndMin.classList.add('weather-max-and-min');
    weatherMax.classList.add('weather-max');
    weatherMin.classList.add('weather-min');

    const max = document.createElement('p');
    const tempMax = document.createElement('p');

    max.textContent = 'Max';
    tempMax.textContent = location.days[0].tempmax;

    weatherMax.append(max, tempMax);

    const min = document.createElement('p');
    const tempMin = document.createElement('p');

    min.textContent = 'Min';
    tempMin.textContent = location.days[0].tempmin;

    weatherMin.append(min, tempMin);

    weatherMaxAndMin.append(weatherMax, weatherMin);

    // Create conditions display
    const weatherConditionsDisplay = document.createElement('div');

    weatherConditionsDisplay.classList.add('weather-conditions');

    const weatherConditionsCurrent = document.createElement('p');

    weatherConditionsCurrent.classList.add('weather-conditions-current');
    weatherConditionsCurrent.textContent = location.days[0].conditions;

    weatherConditionsDisplay.appendChild(weatherConditionsCurrent);

    weatherTempAndConditionsDisplay.append(
        weatherMaxAndMin,
        weatherConditionsDisplay
    );

    // Create description display
    const weatherDescription = document.createElement('p');

    weatherDescription.classList.add('weather-description');
    weatherDescription.textContent = location.days[0].description;

    weatherInformationBox.append(
        locationName,
        weatherTempDisplay,
        weatherTempAndConditionsDisplay,
        weatherDescription
    );
}
