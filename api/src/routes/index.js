const { Router } = require('express');
const { getPoke } = require("../Controllers/getPoke.js");
const { getPokeId } = require("../Controllers/getPokeId.js");
const { getTypes } = require("../Controllers/getTypes.js");
const { postPoke } = require("../Controllers/postPoke.js");
// const {getPokeName} = require("../Controllers/getPokeName.js")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons",getPoke);
router.get("/pokemons/:idPokemon",getPokeId);
// router.get("/pokemons/name",getPokeName)
router.post("/pokemons", postPoke);
router.get("/types", getTypes);


module.exports = router;
