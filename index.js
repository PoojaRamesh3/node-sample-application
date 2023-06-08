const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send(`<h1>API is Working</h1>`);
});

app.listen(port, () => {
  console.log(`Sever Listening on the port ${port}`);
});
