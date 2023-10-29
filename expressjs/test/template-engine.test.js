import express from "express";
import mustacheExpress from "mustache-express";
import request from "supertest";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress())

app.get('/', (req, res) => {
  res.render("index", {
    title: "hello world",
    say: "this is a test"
  });
});

test("Test Express JS", async () => {
  const response = await request(app).get("/");
  console.log(response.text);
  expect(response.text).toContain("hello world");
  expect(response.text).toContain("this is a test");
});