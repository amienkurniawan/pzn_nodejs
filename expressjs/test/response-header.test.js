import express from 'express';
import request from 'supertest';

const app = express();

app.get("/john", (req, res) => {
  res.set({
    "X-Powered-By": "amien kurniawan",
    "X-Author": "Amien"
  });

  res.send("Hello response");

});

test('Test Response Header', async () => {
  const response = await request(app).get("/john");

  expect(response.text).toBe("Hello response");

  expect(response.get("X-Powered-By")).toBe("amien kurniawan");
  expect(response.get("X-Author")).toBe("Amien");
});