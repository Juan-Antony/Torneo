'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Equipo.hasMany(models.Torneo, {foreignKey: 'equipoId'})
    }
  };
  Equipo.init({
    nombreEquipo: DataTypes.STRING,
    integrantes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Equipo',
  });
  return Equipo;
};