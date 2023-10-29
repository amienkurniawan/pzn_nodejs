import express from 'express';
import expressFileUpload from 'express-fileupload';
import request from 'supertest';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(expressFileUpload());

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

app.post('/file', async (req, res) => {
  const textFile = req.files.article;
  await textFile.mv(__dirname + "/upload/" + textFile.name);

  res.send(`Hello ${req.body.name}, you uploaded ${textFile.name}`);
});

test("Test Request File Upload", async () => {
  const response = await request(app)
    .post("/file")
    .set("Content-Type", "multipart/form-data")
    .field("name", "Amien")
    .attach("article", __dirname + "/contoh.txt");

  console.log(response.text)
  expect(response.text).toBe("Hello Amien, you uploaded contoh.txt");
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