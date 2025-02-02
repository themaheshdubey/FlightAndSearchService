const CrudService = require('./crud-service');
const FlightRepository = require('../repository/flight-repository');

class FlightService extends CrudService {
    constructor() {
        const flightRepositoryInstance = new FlightRepository();
        super(flightRepositoryInstance);
        this.flightRepository = flightRepositoryInstance;
    }

    async searchFlights(filter , paginationOptions) {

        const {startCityName, destinationCityName, dateOfJourney} = filter;

        // Validate required parameters
        if (!startCityName || !destinationCityName || !dateOfJourney) {
            throw new Error('Missing required parameters: startCityName, destinationCityName, and dateOfJourney are required.');
        }

        const flights = await this.flightRepository.findByCriteria(filter , paginationOptions);
        return flights;
    }

}

module.exports = FlightService;
