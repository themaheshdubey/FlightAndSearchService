const CrudService = require('./crud-service');
const AirplaneRepository = require('../repository/airplane-repository');

class AirplaneService extends CrudService {
    constructor() {
        const airplaneRepositoryInstance = new AirplaneRepository();
        super(airplaneRepositoryInstance);
    }
}

module.exports = AirplaneService;
