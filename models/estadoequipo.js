'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstadoEquipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EstadoEquipo.hasMany(models.Equipo, {foreignKey: 'estadoEquipoId'})
    }
  };
  EstadoEquipo.init({
    estadoEquipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EstadoEquipo',
  });
  return EstadoEquipo;
};