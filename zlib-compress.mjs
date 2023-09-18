import fs from 'fs';
import zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs"); // disini kita membaca file menjadi stream data
const result = zlib.gzipSync(source); // disini kita melakukan kompresi 

fs.writeFileSync("zlib-compress.mjs.txt", result); // setelah melakukan kompresi kita tulis file hasil kompresi tersebut pada sebuah file
console.info(result.toString());