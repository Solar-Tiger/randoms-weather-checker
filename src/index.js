import { displayWeatherData } from './weatherApp';
import { toggleTemp, changeTempScaleDisplay } from './toggleTemp';

const locationName = document.querySelector('#location-name');
const getWeather = document.querySelector('#get-weather');
const changeTemp = document.querySelector('#change-temp');
const tempScale = document.querySelector('#temp-scale');

// Event listener for button click
getWeather.addEventListener('click', () => {
    displayWeatherData(locationName.value);
    tempScale.textContent = changeTempScaleDisplay(tempScale.textContent);
});

// Event listener for enter key
locationName.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return;

    e.preventDefault();

    displayWeatherData(locationName.value);
    tempScale.textContent = changeTempScaleDisplay(tempScale.textContent);
});

// Event listener for toggling current temp scale
changeTemp.addEventListener('click', () => {
    toggleTemp(tempScale.textContent);
    tempScale.textContent = changeTempScaleDisplay(tempScale.textContent);
});
