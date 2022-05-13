const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/callback", (req, res) => {
  //   console.log("Request received", req);
  res.send(JSON.stringify(req.));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post()