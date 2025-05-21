function convertTemperature(temp, currentTempScale) {
    if (currentTempScale === 'Fahrenheit') {
        const fahrenheit = temp * (9 / 5) + 32;

        return fahrenheit.toFixed(1);
    } else {
        const celsius = (temp - 32) / (9 / 5);

        return celsius.toFixed(1);
    }
}

export { convertTemperature };
