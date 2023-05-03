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

app.get("/all-chef", (req, res) => {
  res.send(chefData);
});

app.get("/chef-details/:id", (req, res) => {
  const chefId = parseInt(req.params.id);
  const chefFound = chefData.find((chef) => chef.id === chefId);
  res.send(chefFound);
});

app.get("/all-recipe", (req, res) => {
  res.send(recipeData);
});

app.get("/chef-recipe/:id", (req, res) => {
  const chefId = parseInt(req.params.id);
  const recipeFound = recipeData.filter((recipe) => recipe.chef_id === chefId);
  res.send(recipeFound);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
