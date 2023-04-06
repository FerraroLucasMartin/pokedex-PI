//GET | /pokemons/:idPokemon
// Esta ruta obtiene el detalle de un pokemon específico. 
//Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
// El pokemon es recibido por parámetro (ID).
// Tiene que incluir los datos del tipo de pokemon al que está asociado.
// Debe funcionar tanto para los pokemones de la API como para los de la base de datos.

const axios = require("axios");
const { Pokemon } = require("../db.js")

const getPokeId = async (req, res) => {
    try {
        const { idPokemon } = req.params;
        
        const pokemonDB = await Pokemon.findOne({ where: { pokeId: idPokemon } });

        if (pokemonDB) {
            console.log("getted from DB")
            res.status(200).json(pokemonDB);
        } else {
            const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
            const pokemonApi = {
                id: data.id,
                nombre: data.name,
                imagen: data.sprites.other["official-artwork"]["front_default"],
                vida: data.stats[0]["base_stat"],
                ataque: data.stats[1]["base_stat"],
                defensa: data.stats[2]["base_stat"],
                velocidad: data.stats[5]["base_stat"],
                altura: data.height,
                peso: data.weight
            }
            console.log("getted from Api")
            res.status(200).json(pokemonApi);
        }

    } catch (error) {
        res.status(500).json({ mss: error.message })
    }
};


module.exports = { getPokeId }