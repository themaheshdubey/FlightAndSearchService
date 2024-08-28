const CrudService = require('./crud-service');
const AirportRepository = require('../repository/airport-repository');

class AirportService extends CrudService {
    constructor() {
        const airportRepositoryInstance = new AirportRepository();
        super(airportRepositoryInstance);
    }
}

module.exports = AirportService;
