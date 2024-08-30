'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.City , {
        foreignKey: 'cityId',
        onDelete: 'CASCADE'
      });

      // 1:N association with Flight as departureAirport
      Airport.hasMany(models.Flight, {
        foreignKey: 'departureAirportId',
        as: 'departures'
      });

      // 1:N association with Flight as arrivalAirport
      Airport.hasMany(models.Flight, {
        foreignKey: 'arrivalAirportId',
        as: 'arrivals'
      });


    }
  }
  Airport.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: DataTypes.STRING,
    cityId:  {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};