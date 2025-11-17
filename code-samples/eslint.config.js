"use strict";

const defineConfig = require( "eslint/config" ).defineConfig; // eslint-disable-line n/no-unpublished-require
const rg = require( "eslint-config-reverentgeek" ); // eslint-disable-line n/no-unpublished-require

module.exports = defineConfig( [
	{
		extends: [ rg.configs.node ],
		rules: {
			strict: "off"
		}
	},
	{
		files: [ "esm/**/*.{js,mjs,cjs}" ],
		extends: [ rg.configs["node-esm"] ]
	}
] );
