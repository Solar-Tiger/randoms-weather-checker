import './reset.css';
import './style.css';
import { toggleTemp, changeTempScaleDisplay } from './toggleTemp';

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

function updateCurrentTemperature(weatherTempAndIcon) {
    const weatherIcon = document.querySelectorAll('.weather-icon');
    const currentTemperature = document.querySelector('.current-temperature');

    for (let i = 0; i < weatherIcon.length; i++) {
        import(
            `./assets/images/weather-condition-icons/${weatherTempAndIcon[i].icon}.svg`
        ).then((weatherCondition) => {
            weatherIcon[i].src = weatherCondition.default;
        });
    }

    currentTemperature.textContent = weatherTempAndIcon[0].temp;
}

function updateWeatherData(weatherMinMaxConditions) {
    const tempMax = document.querySelectorAll('.temp-max');
    const tempMin = document.querySelectorAll('.temp-min');
    const weatherConditionsCurrent = document.querySelectorAll(
        '.weather-conditions-current'
    );

    for (let i = 0; i < tempMax.length; i++) {
        tempMax[i].textContent = weatherMinMaxConditions[i].tempmax;
        tempMin[i].textContent = weatherMinMaxConditions[i].tempmin;
        weatherConditionsCurrent[i].textContent =
            weatherMinMaxConditions[i].conditions;
    }
}

function updateWeatherDescription(description) {
    const weatherDescription = document.querySelector('.weather-description p');

    weatherDescription.textContent = description[0].description;
}

function displayWeatherLocationInformation(weatherData) {
    // Display weather location name
    updateLocationName(weatherData.address);

    // Display weather location weather condition icon and current temperature
    updateCurrentTemperature(weatherData.weatherInfo);

    // Display min temp, max temp and weather conditions
    updateWeatherData(weatherData.weatherInfo);

    // Display weather description
    updateWeatherDescription(weatherData.weatherInfo);
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
