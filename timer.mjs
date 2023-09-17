setInterval(() => {
  console.info(`Start time at ${new Date()}`);
}, 1000)


// ini hanya dijalankan sekali

import timers from 'timers/promises';

console.info(new Date());
const name = await timers.setTimeout(5000, "amien");
console.info(new Date());
console.info(name);

// startTime = timers.setInterval(1000, new Date())

for await (const startTime of timers.setInterval(1000, new Date())) {
  console.info(`Start Timer at ${new Date()}`);
}