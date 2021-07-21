'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstadoTorneo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EstadoTorneo.hasMany(models.Torneo, {foreignKey: 'estadoTorneoId'})
    }
  };
  EstadoTorneo.init({
    estadoTorneo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EstadoTorneo',
  });
  return EstadoTorneo;
};