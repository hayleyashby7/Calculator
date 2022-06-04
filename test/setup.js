import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";

const html = readFileSync("index.html");
const DOM = new JSDOM(html);

global.window = DOM.window;
global.document = window.document;
