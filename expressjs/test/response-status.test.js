import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
  if (req.query.name) {
    res.status(200);
    res.send(`Hello ${req.query.name}`);
  } else {
    res.status(400).end();
  }
});

test('Test Response status', async () => {
  let response = await request(app).get("/").query({ name: "Amien" });
  expect(response.text).toBe("Hello Amien");
  expect(response.status).toBe(200);

  response = await request(app).get("/");
  expect(response.status).toBe(400);
});