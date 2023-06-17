import { readFile } from "node:fs/promises";

export async function readFileJson( fileName ) {
	const text = await readFile( fileName );
	const data = JSON.parse( text );
	return data;
}

