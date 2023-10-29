import express from 'express';
import request from 'supertest';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post('/json', (req, res) => {
  const name = req.body.name;
  res.json({
    hello: `Hello ${name}`
  });
});

app.post('/form', (req, res) => {
  const name = req.body.name;
  const firstname = req.body.firstname;
  res.json({
    hello: `Hello ${name} & firstname ${firstname}`
  });
});

test("Test Request JSON", async () => {
  const response = await request(app)
    .post('/json')
    .set('Content-Type', "Application/json")
    .send({ name: "World" });

  expect(response.body).toEqual({
    hello: 'Hello World'
  });
});

test("Test Request Form", async () => {
  const response = await request(app)
    .post('/form')
    .set('Content-Type', "Application/x-www-form-urlencoded")
    .send("name=World&firstname=Amien");

  expect(response.body).toEqual({
    hello: 'Hello World & firstname Amien'
  });
});