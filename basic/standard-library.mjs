import os from "os";

console.info(os.platform());
console.table(os.cpus());
console.table(os.uptime());
console.table(os.machine());
console.table(os.totalmem());
console.table(os.homedir());
console.table(os.hostname());