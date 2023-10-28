import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send("hello world");
})

app.get('/amien', (req, res) => {
  console.log(req)
  res.send("hello world amien");
})

app.listen(3000, () => {
  console.log("server running in port 3000")
});