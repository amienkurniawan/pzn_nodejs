import { Worker, threadId } from "worker_threads";

const worker1 = new Worker('./worker.mjs');
const worker2 = new Worker('./worker.mjs');
const worker3 = new Worker('./worker.mjs');
const worker4 = new Worker('./worker.mjs');
const worker5 = new Worker('./worker.mjs');
const worker6 = new Worker('./worker.mjs');
const worker7 = new Worker('./worker.mjs');
const worker8 = new Worker('./worker.mjs');
const worker9 = new Worker('./worker.mjs');
const worker10 = new Worker('./worker.mjs');
const worker11 = new Worker('./worker.mjs');
const worker12 = new Worker('./worker.mjs');

worker1.addListener('message', (message) => {
  console.info(`Thread-${threadId} receive from worker-1 : ${message}`);
});

worker2.addListener('message', (message) => {
  console.info(`Thread-${threadId} receive from worker-2 : ${message}`);
});

worker3.addListener('message', (message) => {
  console.info(`Thread-${threadId} receive from worker-3 : ${message}`);
});

worker4.addListener('message', (message) => {
  console.info(`Thread-${threadId} receive from worker-4 : ${message}`);
});

worker5.addListener('message', (message) => {
  console.info(`Thread-${threadId} receive from worker-5 : ${message}`);
});

worker6.addListener('message', (message) => {
  console.info(`Thread-${threadId} receive from worker-6 : ${message}`);
});

worker7.addListener('message', (message) => {
  console.info(`Thread-${threadId} receive from worker-7 : ${message}`);
});
worker8.addListener('message', (message) => {
  console.info(`Thread-${threadId} receive from worker-8 : ${message}`);
});

worker9.addListener('message', (message) => {
  console.info(`Thread-${threadId} receive from worker-9 : ${message}`);
});

worker10.addListener('message', (message) => {
  console.info(`Thread-${threadId} receive from worker-10 : ${message}`);
});

worker11.addListener('message', (message) => {
  console.info(`Thread-${threadId} receive from worker-11 : ${message}`);
});

worker12.addListener('message', (message) => {
  console.info(`Thread-${threadId} receive from worker-12 : ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(10);
worker3.postMessage(10);
worker4.postMessage(10);
worker5.postMessage(10);
worker6.postMessage(10);
worker7.postMessage(10);
worker8.postMessage(10);
worker9.postMessage(10);
worker10.postMessage(10);
worker11.postMessage(10);
worker12.postMessage(10);


