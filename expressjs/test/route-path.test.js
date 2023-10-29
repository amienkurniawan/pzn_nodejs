import express from 'express';
import request from 'supertest';

const app = express();

app.get('/products/*.json', (req, res) => {
  res.send(req.originalUrl);
});

app.get('/categories/*(\\d+).json', (req, res) => {
  res.send(req.originalUrl);
});

test("Test route path product", async () => {
  let response = await request(app).get('/products/eko.json');
  expect(response.text).toBe('/products/eko.json');

  response = await request(app).get('/products/salah.json');
  expect(response.text).toBe('/products/salah.json');

});

test("Test route path categories", async () => {
  let response = await request(app).get('/categories/1234.json');
  expect(response.text).toBe('/categories/1234.json');

  response = await request(app).get('/categories/salah.json');
  expect(response.status).toBe(404);
});