const convertToCelsius = function(num) {
  return Math.trunc(Math.round(Number((10 * ((num - 32) * (5/9)))))) / 10;
};

const convertToFahrenheit = function(num) {
  return Math.trunc(Math.round(Number(10 * ((num * (9 / 5) + 32))))) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
