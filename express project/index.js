const express = require("express");
const http = require("http");
const hostname = "localhost";
const port = 8080;
const app = express();

app.use((req, res) => {
  console.log(req.headers);
  res.status(200).send(`The server is running...`);
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`The server listen on http://${hostname}:${port}`);
});
