import Cluster from "cluster";
import http from 'http';
import os from "os";
import process from "process";

if (Cluster.isPrimary) {
  // jalankan worker
  console.info(`primary : ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    Cluster.fork();
  }

  Cluster.addListener('exit', (worker) => {
    console.info(`Worker-${worker.id} is exit process id-${process.pid}`);
    Cluster.fork();
  });
}

if (Cluster.isWorker) {
  console.info(`worker : ${process.pid}`);
  const server = http.createServer((request, response) => {
    response.write(`Response from process ${process.pid}`);
    response.end();
    process.exit();
  });

  server.listen(3000);
}
