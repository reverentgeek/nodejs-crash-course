const t = require( "./temperature" );

const c = t.boilingCelsius;
const f = t.convertToFahrenheit( c );

console.log( `${ c } C is ${ f } F` );
// output: 100 C is 212 F

