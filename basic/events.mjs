import { PerformanceObserver, performance } from 'perf_hooks';

import { EventEmitter } from 'events';
import fs from 'fs/promises';

const server = new EventEmitter();

server.on('listening', (port) => {
  console.info(`server listening on ${port} .. `);
});


server.emit('listening', '80');
server.emit('getTextFile', 'file-system.txt');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});

obs.observe({ type: 'measure' });
performance.measure('Start to Now');

performance.mark('A');
server.on('getTextFile', async (nameFile) => {
  performance.measure('A to Now', 'A');
  const buffer = await fs.readFile(nameFile);
  console.info(`nama file : ${nameFile} isi: ${buffer.toString()}`);
})