const axios = require("axios")
const { Pokemon } = require("../db.js")


const getPokeName = async (req, res) => {
    try {
        const name = req.query.name
        if (name) {
            const pokemonDB = await Pokemon.findOne({ where: { nombre: name } });
            if (pokemonDB) {
                console.log("getted from DB")
                res.status(200).json(pokemonDB);
            } else {
                const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
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
        } else {
            res.status(404).json({message:"No existe Pokemon con ese nombre."})
        }
    
    }catch (error) {
        res.status(500).json({ mss: error.message })
        }
}

module.exports = { getPokeName }