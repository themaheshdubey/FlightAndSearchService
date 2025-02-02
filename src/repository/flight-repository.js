const CrudRepository = require('./crud-repository');
const { Op } = require('sequelize');
const { Flight, Airport, City } = require('../models'); 

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async findAirportIdsByCityName(cityName) {
        const airports = await Airport.findAll({
            include: [{
                model: City,
                where: { name: cityName }
            }]
        });
        return airports.map(airport => airport.id);
    }


    async findByCriteria(filter , paginationOptions) {

        const {startCityName , destinationCityName , dateOfJourney} = filter;
        const { page, limit } = paginationOptions;


        // Find airport IDs for start and destination cities
        const startAirportIds = await this.findAirportIdsByCityName(startCityName);
        const destinationAirportIds = await this.findAirportIdsByCityName(destinationCityName);

        if (startAirportIds.length === 0 || destinationAirportIds.length === 0) {
            return { flights: [], totalFlights: 0, totalPages: 0, currentPage: page };
        }
    

        // Create a range for the provided date (midnight to midnight)
        const startOfDay = new Date(dateOfJourney);
        startOfDay.setHours(0, 0, 0, 0); // Set time to 00:00:00.000
        const endOfDay = new Date(dateOfJourney);
        endOfDay.setHours(23, 59, 59, 999); // Set time to 23:59:59.999


        // Find flights with pagination
        const { count, rows: flights } = await Flight.findAndCountAll({
            where: {
                departureAirportId: { [Op.in]: startAirportIds },
                arrivalAirportId: { [Op.in]: destinationAirportIds },
                departureTime: { [Op.gte]: startOfDay, [Op.lte]: endOfDay }
            },
            limit: limit,
            offset: (page - 1) * limit
        });

        return {
            flights,
            totalFlights: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        };

    }

}

module.exports = FlightRepository;