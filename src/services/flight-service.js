const CrudService = require('./crud-service');
const FlightRepository = require('../repository/flight-repository');

class FlightService extends CrudService {
    constructor() {
        const flightRepositoryInstance = new FlightRepository();
        super(flightRepositoryInstance);
    }
}

module.exports = FlightService;
