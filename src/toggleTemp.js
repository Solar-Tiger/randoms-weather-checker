import { convertTemperature } from './tempConverter';

function toggleTemp(currentTempScale) {
    let currentTemp = document.querySelector('.current-temperature');
    let maxTemp = document.querySelectorAll('.temp-max');
    let minTemp = document.querySelectorAll('.temp-min');

    let updatedCurrentTemp = convertTemperature(
        Number(currentTemp.textContent),
        currentTempScale
    );

    currentTemp.textContent = updatedCurrentTemp;

    for (let i = 0; i < maxTemp.length; i++) {
        let updatedMaxTemp = convertTemperature(
            Number(maxTemp[i].textContent),
            currentTempScale
        );
        let updatedMinTemp = convertTemperature(
            Number(minTemp[i].textContent),
            currentTempScale
        );

        maxTemp[i].textContent = updatedMaxTemp;
        minTemp[i].textContent = updatedMinTemp;
    }
}

function changeTempScaleDisplay(currentTempScaleDisplay) {
    if (currentTempScaleDisplay === 'Celsius') {
        return 'Fahrenheit';
    } else {
        return 'Celsius';
    }
}

export { toggleTemp, changeTempScaleDisplay };
