const sql = require( "mssql" );

// Read from environment variables
const cnx = process.env.SQL_CONNECTION;

async function getAccountByEmail( email ) {
  try {
    const pool = await sql.connect( cnx );
    const result = await pool.request()
      .input( "email", sql.VarChar( 100 ), email )
      .query( "select * from accounts where email = @email" );
    return result;
  } catch ( err ) {
    // log error
  }
}

module.exports = {
  getAccountByEmail
};
