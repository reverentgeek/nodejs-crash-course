const fs = require( "fs" ); // Built-in Node.js module

const express = require( "express" ); // Module installed via npm

const ApiService = require( "./app/ApiService" ); // Local module

const api = new ApiService( { port: 8888 } );

