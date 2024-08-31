'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // define association here
      Flight.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        as: 'airplane'
      });

      // N:1 association with Airport as departureAirport
      Flight.belongsTo(models.Airport, {
        foreignKey: 'departureAirportId',
        as: 'departureAirport'
      });

      // N:1 association with Airport as arrivalAirport
      Flight.belongsTo(models.Airport, {
        foreignKey: 'arrivalAirportId',
        as: 'arrivalAirport'
      });
  
    }
  }
  Flight.init({
    flightNumber: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    departureAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arrivalAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arrivalTime: {
      allowNull: false,
      type: DataTypes.DATE
    },
    departureTime: {
      allowNull: false,
      type: DataTypes.DATE
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    boardingGate: DataTypes.STRING,
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
   }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};