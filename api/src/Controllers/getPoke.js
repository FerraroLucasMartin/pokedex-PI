const axios = require("axios");
const { Pokemon } = require("../db.js");

const getPoke = async (req, res) => {
  try {
    const cantidad = 9; // cantidad de poke x página
    const page = req.query.page || 1; // número de página puede llegar por query
    const pokeName = req.query.name;

    if (pokeName) {
      const pokemonDB = await Pokemon.findOne({ where: { nombre: pokeName } });
      if (pokemonDB) {
        console.log("getted from DB");
        res.status(200).json(pokemonDB);
      } else {
        const { data } = await axios(
          `https://pokeapi.co/api/v2/pokemon/${pokeName}`
        );
        const pokemonApi = {
          id: data.id,
          nombre: data.name,
          imagen: data.sprites.other["official-artwork"]["front_default"],
          vida: data.stats[0]["base_stat"],
          ataque: data.stats[1]["base_stat"],
          defensa: data.stats[2]["base_stat"],
          velocidad: data.stats[5]["base_stat"],
          altura: data.height,
          peso: data.weight,
        };
        console.log("getted from Api");
        res.status(200).json(pokemonApi);
      }
    } else {
      const offset = (page - 1) * cantidad;
      const limit = cantidad;
      const { data } = await axios(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      const pokemonsUrlList = data.results;
      const pokemonsList = await Promise.all(
        pokemonsUrlList.map(async (pokeUrl) => {
          const { data } = await axios(pokeUrl.url);
          const pokemon = {
            id: data.id,
            nombre: data.name,
            imagen: data.sprites.other["official-artwork"]["front_default"],
            vida: data.stats[0]["base_stat"],
            ataque: data.stats[1]["base_stat"],
            defensa: data.stats[2]["base_stat"],
            velocidad: data.stats[5]["base_stat"],
            altura: data.height,
            peso: data.weight,
            types: data.types,
          };
          return pokemon;
        })
      );
      res.status(200).json(pokemonsList);
    }
  } catch (error) {
    res.status(500).json({ mss: error.message });
  }
};

module.exports = { getPoke };
