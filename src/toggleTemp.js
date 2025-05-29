import { convertTemperature } from './tempConverter';

function toggleTemp(currentTempScale) {
    let currentTemp = document.querySelector('.current-temperature');
    let maxTemp = document.querySelectorAll('.temp-max');
    let minTemp = document.querySelectorAll('.temp-min');

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

function changeTempScaleDisplay(currentTempScaleDisplay) {
    if (currentTempScaleDisplay === 'Celsius') {
        return 'Fahrenheit';
    } else {
        return 'Celsius';
    }
}

export { toggleTemp, changeTempScaleDisplay };
