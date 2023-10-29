import cookieParser from "cookie-parser";
import express from "express";
import request from "supertest";

const app = express();

app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
  const name = req.cookies["name"];
  const author = req.cookies["author"];
  res.send(`Hello ${name} Author ${author}`);
})

test("Test Cookie Read", async () => {
  const response = await request(app)
    .get("/")
    .set("Cookie", "name=Amien;author=Amien Kurniawan");

  expect(response.text).toBe("Hello Amien Author Amien Kurniawan");
});

app.post('/login', (req, res) => {
  const name = req.body.name;
  res.cookie('Login', name, { path: '/' });
  res.send(`Hello ${name}`);
});

test("Test Cookie Write", async () => {
  const response = await request(app)
    .post("/login")
    .send({ name: "Amien" });

  expect(response.get('Set-Cookie').toString()).toContain("Amien");
  expect(response.text).toBe("Hello Amien");
});