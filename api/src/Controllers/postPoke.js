const axios = require("axios")
const { Pokemon, Tipo } = require("../db.js")

const postPoke = async (req, res) => {
    try {
        const { newTipos, nombre, altura, peso, imagen, vida, ataque, defensa, velocidad } = req.body
        const newPokemon = Pokemon.build({
            nombre,
            altura,
            peso,
            imagen,
            vida,
            ataque,
            defensa,
            velocidad
        });

        const pokeTipo = await Tipo.findAll({
            where: {
                nombre: newTipos
            }
        });
        newPokemon.setTipos(pokeTipo);
        await newPokemon.save()
        console.log("Pokemon Created")
        res.status(200).json({ message: "Success" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

module.exports = { postPoke }