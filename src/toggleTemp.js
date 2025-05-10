import { convertTemperature } from './tempConverter';

function toggleTemp() {
    const currentTempScale = document.querySelector(
        '#change-temp > span'
    ).textContent;

    let currentTemp = document.querySelector('.current-temperature');
    let maxTemp = document.querySelector('.max-temp');
    let minTemp = document.querySelector('.min-temp');

    let updatedCurrentTemp = convertTemperature(
        Number(currentTemp.textContent),
        currentTempScale
    );
    let updatedMaxTemp = convertTemperature(
        Number(maxTemp.textContent),
        currentTempScale
    );
    let updatedMinTemp = convertTemperature(
        Number(minTemp.textContent),
        currentTempScale
    );

    currentTemp.textContent = updatedCurrentTemp;
    maxTemp.textContent = updatedMaxTemp;
    minTemp.textContent = updatedMinTemp;
}

function changeTempScaleDisplay() {
    let currentTempScaleDisplay = document.querySelector('#change-temp > span');

    if (currentTempScaleDisplay.textContent === 'Celsius') {
        currentTempScaleDisplay.textContent = 'Fahrenheit';
    } else {
        currentTempScaleDisplay.textContent = 'Celsius';
    }
}

export { toggleTemp, changeTempScaleDisplay };
