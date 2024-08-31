const CrudService = require('./crud-service');
const FlightRepository = require('../repository/flight-repository');

class FlightService extends CrudService {
    constructor() {
        const flightRepositoryInstance = new FlightRepository();
        super(flightRepositoryInstance);
        this.flightRepository = flightRepositoryInstance;
    }

    async searchFlights(filter) {
        const flights = await this.flightRepository.findByCriteria(filter);
        return flights;
    }

}

module.exports = FlightService;
