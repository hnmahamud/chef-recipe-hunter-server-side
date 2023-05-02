const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const chefData = require("./data/chefData.json");
const recipeData = require("./data/recipeData.json");

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.get("/allChef", (req, res) => {
  res.send(chefData);
});

app.get("/allRecipe", (req, res) => {
  res.send(recipeData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
