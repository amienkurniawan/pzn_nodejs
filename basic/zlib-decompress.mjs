import fs from 'fs';
import zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs.txt"); // disini kita membaca file hasil compresi
const result = zlib.unzipSync(source); // output dari file compresi kemudian kita unzip/decript 

console.info(result.toString()); // hasil dari unzip dikembalikan dan seharusnya berupa toString