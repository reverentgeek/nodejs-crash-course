const ApiService = require( "./app/ApiService" );
const api = new ApiService( { port: 8888 } );

// Async-await callback
async function doTheThing() {
	try {
		const users = await api.asyncMethodReturningUsers();
		const results = await api.methodReturningAPromise( "bacon", 42 );
		for (let i = 0; i < results.length; i++) {
			// whatevs...
		}
	} catch( err ) {
		console.log( err );	
	}
}

doTheThing();

