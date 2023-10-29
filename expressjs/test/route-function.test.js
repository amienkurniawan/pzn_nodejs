import express from 'express';
import request from 'supertest';

const app = express();

app.route('/products')
  .get((req, res) => {
    res.send('Hello ini get');
  })
  .post((req, res) => {
    res.send('Hello ini post');
  })
  .put((req, res) => {
    res.send('Hello ini put');
  })
  .delete((req, res) => {
    res.send('Hello ini delete');
  })
  .patch((req, res) => {
    res.send('Hello ini patch');
  })

test("Test route function", async () => {
  let response = await request(app).get('/products');
  expect(response.text).toBe('Hello ini get');

  response = await request(app).post('/products');
  expect(response.text).toBe('Hello ini post');

  response = await request(app).put('/products');
  expect(response.text).toBe('Hello ini put');

  response = await request(app).delete('/products');
  expect(response.text).toBe('Hello ini delete');

  response = await request(app).patch('/products');
  expect(response.text).toBe('Hello ini patch');
});