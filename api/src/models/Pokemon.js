const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {

    pk: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    
    pokeId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique:true,
      autoIncrement: true
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    altura:{
      type: DataTypes.INTEGER,
    },

    peso:{
      type: DataTypes.INTEGER,
    },
    //other.official-artwork.front_default
    imagen:{
      type: DataTypes.TEXT,
      allowNull: false,
    },

    //Array stats

    vida:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    ataque:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    defensa:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    velocidad:{
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false
  });
};
