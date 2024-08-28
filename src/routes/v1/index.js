const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/city-controller');
const AirplaneController = require('../../controllers/airplane-controller');
const AirportController = require('../../controllers/airport-controller');


router.post('/city' , CityController.createCity);//creates a particular city
router.delete('/city/:id' , CityController.deleteCity);//deletes a particular city
router.get('/city/:id' , CityController.getCity);//fetches a particular city
router.get('/city' , CityController.getAllCities);//fetches all city 
router.patch('/city/:id' , CityController.updateCity);//update a particular city with a new data

router.post('/airplane' , AirplaneController.createAirplane);
router.delete('/airplane/:id' , AirplaneController.deleteAirplane);
router.get('/airplane/:id' , AirplaneController.getAirplane);
router.get('/airplane' , AirplaneController.getAllAirplanes);
router.patch('/airplane/:id' , AirplaneController.updateAirplane);


router.post('/airport' , AirportController.createAirport);
router.delete('/airport/:id' , AirportController.deleteAirport);
router.get('/airport/:id' , AirportController.getAirport);
router.get('/airport' , AirportController.getAllAirports);
router.patch('/airport/:id' , AirportController.updateAirport);

module.exports = router;
