import { readFileJson } from "./esm-module-example.mjs";

const baconFile = new URL( "./bacon.json", import.meta.url );
const bacon = await readFileJson( baconFile );
console.log( bacon );
