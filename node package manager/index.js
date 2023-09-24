import { findBigest, sayHello, sum } from "amien-node-npm-library";

import { readFile } from "node-package-manager/read";
import { writeTofile } from "node-package-manager/write";

writeTofile("amien.log", "amien kurniawan");
readFile("amien.log");

console.info(sayHello("TEST INI AMIEN KURNIAWAN"));

console.info(sum([12, 12, 1]));
console.info(findBigest([12, 15, 1]));