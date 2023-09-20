import net from 'net';

const client = net.createConnection({
  port: 3000,
  host: "localhost"
});

client.addListener("data", (data) => {
  console.info(`Received data from server : ${data.toString()}`);
});

setInterval(() => {
  client.write(`date : ${new Date()} amien \r\n`); // kita perlu menggunakan \r\n yang diartikan sebagai enter pada node js
}, 2000);