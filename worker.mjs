import { parentPort, threadId } from "worker_threads";

parentPort.addListener("message", () => {
  for (let i = 0; i <= 10; i++) {
    console.info(`Thread-${threadId} send message ${i}`);
    parentPort.postMessage(i);
  }
  parentPort.close();
});