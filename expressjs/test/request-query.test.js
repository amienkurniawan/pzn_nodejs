import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
  res.send(`Hello ${req.query.firstname} ${req.query.lastname}`);
});

test("Test Query Parameter", async () => {
  const response = await request(app).get("/").query({ firstname: "amien", lastname: "kurniawan" });
  expect(response.text).toBe("Hello amien kurniawan");
})