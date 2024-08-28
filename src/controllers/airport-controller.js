const AirportService = require('../services/airport-service');
const airportService = new AirportService();

const createAirport = async (req, res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Successfully created an airport',
            err: {}
        });
    } catch (error) {
        console.error('Error in createAirport:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to create an airport',
            err: error.message
        });
    }
};

const deleteAirport = async (req, res) => {
    try {
        const response = await airportService.delete(req.params.id);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'Airport not found',
                err: {}
            });
        }
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted an airport',
            err: {}
        });
    } catch (error) {
        console.error('Error in deleteAirport:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to delete an airport',
            err: error.message
        });
    }
};

const getAirport = async (req, res) => {
    try {
        const response = await airportService.get(req.params.id);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'Airport not found',
                err: {}
            });
        }
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched an airport',
            err: {}
        });
    } catch (error) {
        console.error('Error in getAirport:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch an airport',
            err: error.message
        });
    }
};

const updateAirport = async (req, res) => {
    try {
        const response = await airportService.update(req.params.id, req.body);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'Airport not found',
                err: {}
            });
        }
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated an airport',
            err: {}
        });
    } catch (error) {
        console.error('Error in updateAirport:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to update an airport',
            err: error.message
        });
    }
};

const getAllAirports = async (req, res) => {
    try {
        const response = await airportService.getAll();
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched all airports',
            err: {}
        });
    } catch (error) {
        console.error('Error in getAllAirports:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch all airports',
            err: error.message
        });
    }
};

module.exports = {
    createAirport,
    deleteAirport,
    getAirport,
    updateAirport,
    getAllAirports
};
