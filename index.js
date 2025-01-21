let inputEl = document.getElementById("input");
console.log(inputEl);
const convertBtn = document.getElementById("convert-btn");
console.log(convertBtn)
const resultLength = document.getElementById("result-length");
const resultVolume = document.getElementById("result-volume");
const resultMass = document.getElementById("result-mass");
console.log(resultLength);
console.log(resultVolume);
console.log(resultMass)

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterTofeet = 3.281
const literToGallon = 0.264
const kgToPd = 2.204

let valueEl = inputEl.value

convertBtn.addEventListener("click", function() {
  // Length Value
  let feet = inputEl.value * meterTofeet
  let meter = inputEl.value / meterTofeet
  resultLength.textContent = `${input.value} Meters = ${feet.toFixed(3)} Feet | ${input.value} Feet = ${meter.toFixed(3)} Meters`

  // Volume Value
  let liter = inputEl.value * literToGallon
  let gallon = inputEl.value / literToGallon
  resultVolume.textContent = `${input.value} Liters = ${liter.toFixed(3)} Gallons | ${input.value} Gallons = ${gallon.toFixed(3)} Liters`

  // Mass Value
  let kilogram = inputEl.value * kgToPd
  let pound = inputEl.value / kgToPd
  resultMass.textContent = `${input.value} Kilograms = ${kilogram.toFixed(3)} Pounds | ${input.value} Pounds = ${pound.toFixed(3)} Kilograms`

})