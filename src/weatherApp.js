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

// Fetches and returns weather data JSON
async function fetchWeatherData(location) {
    const currentDate = new Date();

    const todaysDate = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;

    const fetchedData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${todaysDate}?key=LV7GDK42GAYSFKS3SEPANMFJL`
    );

    if (!fetchedData.ok) {
        throw new Error(fetchedData.status);
    }

    const weatherData = await fetchedData.json();

    return {
        location: weatherData.resolvedAddress,
        weatherIcon: weatherData.days[0].icon,
        currentTemp: weatherData.days[0].temp,
        tempMax: weatherData.days[0].tempmax,
        tempMin: weatherData.days[0].tempmin,
        weatherConditions: weatherData.days[0].conditions,
        weatherDescription: weatherData.days[0].description
    };
}

// Displays fetched weather
async function displayWeatherData(location) {
    try {
        const fetchedWeatherData = await fetchWeatherData(location);

        displayWeatherLocationInformation(fetchedWeatherData);
    } catch (error) {
        console.log(error);
    }
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

function displayWeatherLocationInformation(location) {
    // Display weather location name
    updateLocationName(location.location);

    // Display weather location weather condition icon and current temperature
    updateCurrentTemperature(location.weatherIcon, location.currentTemp);

    // Display min temp, max temp and weather conditions
    updateWeatherData(
        location.tempMax,
        location.tempMin,
        location.weatherConditions
    );

    // Display weather description
    const weatherDescription = document.querySelector('.weather-description');

    weatherDescription.textContent = location.weatherDescription;
}

export { displayWeatherData };
