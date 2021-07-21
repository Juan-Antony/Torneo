'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Torneo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Torneo.belongsTo(models.EstadoTorneo, {foreignKey: 'estadoTorneoId', as: 'estadoTorneo'})
      Torneo.belongsTo(models.Equipo, {foreignKey: 'equipoId', as: 'equipos'})
    }
  };
  Torneo.init({
    nombreTorneo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fechaInicio: DataTypes.DATE,
    fechafin: DataTypes.DATE,
    numEquipos: DataTypes.INTEGER,
    numMaxEquipos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Torneo',
  });
  return Torneo;
};