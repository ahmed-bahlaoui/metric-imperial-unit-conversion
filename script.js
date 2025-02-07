const inputField = document.getElementById("input-field");
const convertBtn = document.getElementById("convert-btn");

// Conversion rates
const conversions = {
  length: {
    meterToFeet: 3.28084,
    feetToMeter: 0.3048,
  },
  volume: {
    literToGallon: 0.264172,
    gallonToLiter: 3.78541,
  },
  mass: {
    kiloToPound: 2.20462,
    poundToKilo: 0.453592,
  },
};

// Function to format numbers to 3 decimal places
function formatNumber(num) {
  return Number(num.toFixed(3));
}

// Function to perform conversions
function convertUnits(value) {
  if (value === "" || isNaN(value)) {
    value = 0;
  }

  const number = parseFloat(value);

  // Update length conversion
  const metersToFeet = formatNumber(number * conversions.length.meterToFeet);
  const feetToMeters = formatNumber(number * conversions.length.feetToMeter);
  document.querySelector(
    ".unit-conversion-container:nth-child(1) p"
  ).textContent = `${number} meters = ${metersToFeet} feet | ${number} feet = ${feetToMeters} meters`;

  // Update volume conversion
  const litersToGallons = formatNumber(
    number * conversions.volume.literToGallon
  );
  const gallonsToLiters = formatNumber(
    number * conversions.volume.gallonToLiter
  );
  document.querySelector(
    ".unit-conversion-container:nth-child(2) p"
  ).textContent = `${number} liters = ${litersToGallons} gallons | ${number} gallons = ${gallonsToLiters} liters`;

  // Update mass conversion
  const kilosToPounds = formatNumber(number * conversions.mass.kiloToPound);
  const poundsToKilos = formatNumber(number * conversions.mass.poundToKilo);
  document.querySelector(
    ".unit-conversion-container:nth-child(3) p"
  ).textContent = `${number} kilos = ${kilosToPounds} pounds | ${number} pounds = ${poundsToKilos} kilos`;
}

// Event listeners
convertBtn.addEventListener("click", () => {
  convertUnits(inputField.value);
});

// Optional: Convert when user presses Enter
inputField.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    convertUnits(inputField.value);
  }
});

// Initialize with default value
convertUnits(20);
