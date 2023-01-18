const express = require("express");
let pokemons = require("./mock-pokemon");

const app = express();

const port = 3001;

app.get("/", (req, res) => res.send("Hello, Express gang ! 😋"));

app.get("/api/pokemons/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  res.send(`Vous avez demandé le pokémon n°${pokemon.name}`);
});

app.listen(port, () =>
  console.log(
    `Notre application Node est démarrée sur : http://localhost:${port}`
  )
);
