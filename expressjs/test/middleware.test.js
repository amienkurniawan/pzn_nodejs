import express from "express";
import request from "supertest";

const logger = (req, res, next) => {
  console.info(`Received request : ${req.method} ${req.originalUrl}`);
  next();
}

const addPoweredHeader = (req, res, next) => {
  res.set('X-Powered-By', 'Amien Kurniawan');
  next();
}

const apiKeyMiddleware = (req, res, next) => {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(401).end();
  }
}

const addRequestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
}

const app = express();

app.use(logger);
app.use(addPoweredHeader);
app.use(apiKeyMiddleware);
app.use(addRequestTime);

app.get("/", (req, res) => {
  res.send(`Hello World`);
});

app.get("/amien", (req, res) => {
  res.send(`Hello amien`);
});

app.get('/time', (req, res) => {
  res.send(`Hello, Today is ${req.requestTime}`)
})

test("Test middleware with query api key", async () => {
  const response = await request(app).get("/").query({ apiKey: 123 });
  expect(response.get('X-Powered-By')).toBe("Amien Kurniawan");
  expect(response.text).toBe('Hello World');
});

test("Test middleware amien with query api key", async () => {
  const response = await request(app).get("/amien").query({ apiKey: 123 });
  expect(response.get('X-Powered-By')).toBe("Amien Kurniawan");
  expect(response.text).toBe('Hello amien');
});

test("Test middleware Unauthorize", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(401);
});

test("Test request time ", async () => {
  const response = await request(app).get("/time").query({ apiKey: 123 });
  expect(response.text).toContain("Hello, Today is");
});
