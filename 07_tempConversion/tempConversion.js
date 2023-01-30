const convertToCelsius = function(farenheit) {

  var toCelsius = 0;

  toCelsius = (farenheit-32)*5/9;

  
  return Math.round(toCelsius * 10) / 10;

};

const convertToFahrenheit = function(celsius) {

  var toFarenheit = 0;

  toFarenheit = (celsius * 9/5) + 32;


  return Math.round(toFarenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
