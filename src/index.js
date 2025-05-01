// import './reset.css';
// import './style.css';

// Get input, button and element to display weather information

const locationName = document.querySelector('#location-name');
const fetchWeather = document.querySelector('#fetch-weather');
const weatherDataDisplay = document.querySelector('.weather-data-display');
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

    const weatherIcon = displayCurrentWeatherIcon(
        fetchedWeatherData.days[0].icon
    );

    document.body.appendChild(weatherIcon);
}

function displayCurrentWeatherIcon(currentWeather) {
    const weatherIconImg = document.createElement('img');

    weatherIconImg.src = `../src/assets/images/weather-condition-icons/${currentWeather}.svg`;
    weatherIconImg.width = '70';
    weatherIconImg.height = '70';

    return weatherIconImg;
}

async function displayWeatherLocation(location) {
    const nameDisplay = document.createElement('p');

    nameDisplay.classList.add('weather-location');
    nameDisplay.textContent = location.resolvedAddress;

    weatherInformationBox.appendChild(nameDisplay);
}

// async function displayWeatherData() {
//     weatherInformationBox.textContent = '';
// }

/*  
    Relevant information for user

    1.) Location Name. Done
    2.) Conditions(snow, rain, fog, wind, cloudy, partly-cloudy-day/partly-cloudy-night, clear-day/clear-night). Done
    3.) Description. Done
    4.) Feelslike, feelslikemax, feelslike min
    5.) Temp, tempmax, tempmin. Done
*/
