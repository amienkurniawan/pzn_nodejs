import cookieParser from "cookie-parser";
import express from "express";
import request from "supertest";

const app = express();

app.use(cookieParser("STRINGSECRET"));
app.use(express.json());

app.get('/', (req, res) => {
  const name = req.signedCookies["Login"];
  // const author = req.cookies["author"];
  res.send(`Hello ${name}`);
})

test("Test Cookie Read", async () => {
  const response = await request(app)
    .get("/")
    .set("Cookie", "Login=s%3AAmien.881ZMDGZp%2FuCXEUYLZuG%2BK8HQEn7Fw82DRK%2F0CW4m2s; Path=/");

  expect(response.text).toBe("Hello Amien");
});

app.post('/login', (req, res) => {
  const name = req.body.name;
  res.cookie('Login', name, { path: '/', signed: true });
  res.send(`Hello ${name}`);
});

test("Test Cookie Write", async () => {
  const response = await request(app)
    .post("/login")
    .send({ name: "Amien" });

  expect(response.get('Set-Cookie').toString()).toContain("Amien");
  expect(response.text).toBe("Hello Amien");
});