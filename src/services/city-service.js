const CrudService = require('./crud-service');
const CityRepository = require('../repository/city-repository');

class CityService extends CrudService {
    constructor() {
        // Create an instance of CityRepository
        const cityRepositoryInstance = new CityRepository();
        // Pass the instance to the superclass constructor
        super(cityRepositoryInstance);
    }
}

module.exports = CityService;
