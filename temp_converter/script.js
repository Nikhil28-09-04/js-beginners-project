document.addEventListener("DOMContentLoaded", function () {
  const inputTemperature = document.getElementById("input-temperature");
  const fromUnit = document.getElementById("from-unit");
  const toUnit = document.getElementById("to-unit");
  const result = document.getElementById("result");
  const convertButton = document.getElementById("convert");

  convertButton.addEventListener("click", () => {
    const temperature = parseFloat(inputTemperature.value);

    if (isNaN(temperature)) {
      result.innerHTML = "Please enter a valid temperature.";
      return;
    }

    const from = fromUnit.value;
    const to = toUnit.value;

    let convertedTemperature;

    if (from === "celsius") {
      if (to === "celsius") {
        convertedTemperature = temperature;
      } else if (to === "kelvin") {
        convertedTemperature = temperature + 273.15;
      } else {
        convertedTemperature = (temperature * 9) / 5 + 32;
      }
    } else if (from === "kelvin") {
      if (to === "celsius") {
        convertedTemperature = temperature - 273.15;
      } else if (to === "kelvin") {
        convertedTemperature = temperature;
      } else {
        convertedTemperature = ((temperature - 273.15) * 9) / 5 + 32;
      }
    } else {
      if (to === "celsius") {
        convertedTemperature = ((temperature - 32) * 5) / 9;
      } else if (to === "kelvin") {
        convertedTemperature = ((temperature - 32) * 5) / 9 + 273.15;
      } else {
        convertedTemperature = temperature;
      }
    }

    result.innerHTML = `${temperature} ${from.toUpperCase()} is ${convertedTemperature.toFixed(
      2
    )} ${to.toUpperCase()}`;
  });
});
