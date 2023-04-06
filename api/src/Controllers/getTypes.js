const axios = require("axios")
const { Tipo } =require("../db.js")

const getTypes = async (req, res) => {
    try {

        const hasTipos = async () => {
            const contador = await Tipo.count();
            return contador > 0;
        }

        if (await hasTipos()) {
            const tiposBD= await Tipo.findAll();
            console.log("Getted from DB");
            res.status(200).json(tiposBD);
        }else
        {
            const {data} = await axios("https://pokeapi.co/api/v2/type")
            const dataRy= data.results
            const typesRy= dataRy.map((obj)=>{
                const type= {
                    id:obj.url.split("/")[6],
                    nombre: obj.name,
                };
                return type;
            });
    
            const tipos = await Tipo.bulkCreate(typesRy, { returning: true })
            console.log("Getted from API");
            res.status(200).json(tipos);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {getTypes}