import fs from 'fs';

const fsPromises = fs.promises;

const bufferPromises = await fsPromises.readFile('async.js');

console.info(bufferPromises.toString());


const buffer = fs.readFileSync('file-system.txt');

console.info(buffer.toString());

