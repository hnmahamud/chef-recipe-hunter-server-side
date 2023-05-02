const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const chefData = require("./data/chefData.json");

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.get("/allChef", (req, res) => {
  res.send(chefData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
