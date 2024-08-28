const express = require('express');
const router = express.Router();


const CityController = require('../../controllers/city-controller');

router.post('/city' , CityController.create);//creates a particular city
router.delete('/city/:id' , CityController.destroy);//deletes a particular city
router.get('/city/:id' , CityController.get);//fetches a particular city
router.get('/city' , CityController.getAll);//fetches all city 
router.patch('/city/:id' , CityController.update);//update a particular city with a new data


module.exports = router;
