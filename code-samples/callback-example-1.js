const ApiService = require( "./app/ApiService" );
const api = new ApiService( { port: 8888 } );

// Traditional Node-style callback
api.methodWithACallback( "bacon", 42, function( err, results ) {
  if ( err ) {
    // Do something with the error
    console.log( err );
    return;
  }
  // Do stuff with results
  for ( let i = 0; i < results.length; i++ ) {
    // stuff...
  }
} );

