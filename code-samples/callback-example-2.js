const ApiService = require( "./app/ApiService" );
const api = new ApiService( { port: 8888 } );

// Promise-style callback
api.methodReturningAPromise( "bacon", 42 )
	.then( results => {
		for (let i = 0; i < results.length; i++) {
			// whatevs...
		}
	} )
	.catch( err => {
		console.log( err );
	} );

	