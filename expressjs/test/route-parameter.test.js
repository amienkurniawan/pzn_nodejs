import express from 'express';
import request from 'supertest';

const app = express();

app.get('/products/:idProduct', (req, res) => {

  const idProduct = req.params.idProduct;

  res.send(`Hello id product : ${idProduct}`);
});

app.get('/categories/:id(\\d+)', (req, res) => {

  const idCategories = req.params.id;
  res.send(`Hello id categories : ${idCategories}`);
});

app.get('/seller/:idseller/products/:idproduct', (req, res) => {

  const idSeller = req.params.idseller;
  const idProduct = req.params.idproduct;
  res.send(`Hello id seller : ${idSeller} id product : ${idProduct}`);
});

test("Test route param id product", async () => {
  let response = await request(app).get('/products/eko');
  expect(response.text).toBe('Hello id product : eko');

  response = await request(app).get('/products/salah');
  expect(response.text).toBe('Hello id product : salah');

});

test("Test route param id categories", async () => {
  let response = await request(app).get('/categories/1234');
  expect(response.text).toBe('Hello id categories : 1234');

  response = await request(app).get('/categories/salah');
  expect(response.status).toBe(404);
});


test("Test route param id seller dan id product", async () => {
  let response = await request(app).get('/seller/1234/products/567');
  expect(response.text).toBe('Hello id seller : 1234 id product : 567');

  response = await request(app).get('/seller/juki/products/motor');
  expect(response.text).toBe('Hello id seller : juki id product : motor');
});