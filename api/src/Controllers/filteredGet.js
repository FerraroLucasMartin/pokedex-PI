const axios = require("axios")

//Falta La paginacion para filtrar e resultado del array de todos los poke de un mismo tipo.

const filteredType = async (req, res) => {
    try {
        const {idType}= req.params

            const {data} = await axios(`https://pokeapi.co/api/v2/type/${idType}`)
            const dataRy= data.pokemon
            const pokemonUrls = dataRy.map(pokemonObj => pokemonObj.pokemon.url);
            const pokemonsRy = await Promise.all(pokemonUrls.map(async (pokeUrl) => {
                const { data } = await axios(pokeUrl);
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
                    types: data.types
                }
                return pokemon;
            }))

            res.status(200).json(pokemonsRy);
        // }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {filteredType}