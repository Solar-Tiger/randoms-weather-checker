import './reset.css';
import './style.css';
import { toggleTemp, changeTempScaleDisplay } from './toggleTemp';
import clearDay from './assets/images/weather-condition-icons/clear-day.svg';
import clearNight from './assets/images/weather-condition-icons/clear-night.svg';
import cloudy from './assets/images/weather-condition-icons/cloudy.svg';
import fog from './assets/images/weather-condition-icons/fog.svg';
import partlyCloudyDay from './assets/images/weather-condition-icons/partly-cloudy-day.svg';
import partylyCloudyNight from './assets/images/weather-condition-icons/partly-cloudy-night.svg';
import rain from './assets/images/weather-condition-icons/rain.svg';
import snow from './assets/images/weather-condition-icons/snow.svg';
import wind from './assets/images/weather-condition-icons/wind.svg';

// Fetches and returns weather data JSON
async function fetchWeatherData(location) {
    const fetchedData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=LV7GDK42GAYSFKS3SEPANMFJL`
    );

    if (!fetchedData.ok) {
        throw new Error(fetchedData.status);
    }

    const weatherData = await fetchedData.json();

    return {
        weatherInfo: weatherData.days,
        address: weatherData.resolvedAddress
    };
}

// Displays fetched weather
async function displayWeatherData(location) {
    try {
        const fetchedWeatherData = await fetchWeatherData(location);

        console.log(fetchedWeatherData);

        displayWeatherLocationInformation(fetchedWeatherData);
        defaultToCelsius();
    } catch (error) {
        console.log(error);
    }
}

function defaultToCelsius() {
    const tempScale = document.querySelector('#temp-scale');

    tempScale.textContent = changeTempScaleDisplay();
}

function updateLocationName(name) {
    const locationName = document.querySelector('#weather-location');

    locationName.textContent = name;
}

function updateCurrentTemperature(icon, currentTemp) {
    const weatherIcon = document.querySelector('.weather-icon');
    const currentTemperature = document.querySelector('.current-temperature');

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

    weatherIcon.src = weatherIcons[icon];
    currentTemperature.textContent = currentTemp;
}

function updateWeatherData(max, min, conditionsCurrent) {
    const tempMax = document.querySelector('.temp-max');
    const tempMin = document.querySelector('.temp-min');
    const weatherConditionsCurrent = document.querySelector(
        '.weather-conditions-current'
    );

    tempMax.textContent = max;
    tempMin.textContent = min;
    weatherConditionsCurrent.textContent = conditionsCurrent;
}

function updateWeatherDescription(description) {
    const weatherDescription = document.querySelector('.weather-description');

    weatherDescription.textContent = description;
}

function displayWeatherLocationInformation(weatherData) {
    // Display weather location name
    updateLocationName(weatherData.address);

    // Display weather location weather condition icon and current temperature
    updateCurrentTemperature(
        weatherData.weatherInfo[0].icon,
        weatherData.weatherInfo[0].temp
    );

    // Display min temp, max temp and weather conditions
    updateWeatherData(
        weatherData.weatherInfo[0].tempmax,
        weatherData.weatherInfo[0].tempmin,
        weatherData.weatherInfo[0].conditions
    );

    // Display weather description
    updateWeatherDescription(weatherData.weatherInfo[0].description);
}

function changeTempScale() {
    const changeTemp = document.querySelector('#change-temp');
    const tempScale = document.querySelector('#temp-scale');

    // Event listener for toggling current temp scale
    changeTemp.addEventListener('click', () => {
        toggleTemp(tempScale.textContent);
        tempScale.textContent = changeTempScaleDisplay(tempScale.textContent);
    });
}

export { displayWeatherData, changeTempScale };
