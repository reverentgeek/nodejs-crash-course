function convertToCelsius( f ) {
  return ( f - 32 ) * ( 5 / 9 );
}

function convertToFahrenheit( c ) {
  return ( c * ( 9 / 5 ) ) + 32;
}

const temp = {
  freezingCelsius: 0,
  freezingFahrenheit: 32,
  boilingCelsius: 100,
  boilingFahrenheit: 212,
  convertToCelsius,
  convertToFahrenheit
};

module.exports = temp;

