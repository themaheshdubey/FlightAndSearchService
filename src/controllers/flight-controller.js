
const FlightService = require('../services/flight-service');
const flightService = new FlightService();

const createFlight = async (req, res) => {
    try {
        const flight = await flightService.create(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}
        });
    } catch (error) {
        console.error('Error in createFlight:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to create a flight',
            err: error.message
        });
    }
};

const deleteFlight = async (req, res) => {
    try {
        const response = await flightService.delete(req.params.id);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'Flight not found',
                err: {}
            });
        }
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a flight',
            err: {}
        });
    } catch (error) {
        console.error('Error in deleteFlight:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to delete a flight',
            err: error.message
        });
    }
};

const getFlight = async (req, res) => {
    try {
        const response = await flightService.get(req.params.id);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'Flight not found',
                err: {}
            });
        }
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a flight',
            err: {}
        });
    } catch (error) {
        console.error('Error in getFlight:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch a flight',
            err: error.message
        });
    }
};

const updateFlight = async (req, res) => {
    try {
        const response = await flightService.update(req.params.id, req.body);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'Flight not found',
                err: {}
            });
        }
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated a flight',
            err: {}
        });
    } catch (error) {
        console.error('Error in updateFlight:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to update a flight',
            err: error.message
        });
    }
};

const getAllFlights = async (req, res) => {
    try {
        const response = await flightService.getAll();
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched all flights',
            err: {}
        });
    } catch (error) {
        console.error('Error in getAllFlights:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch all flights',
            err: error.message
        });
    }
};

module.exports = {
    createFlight,
    deleteFlight,
    getFlight,
    updateFlight,
    getAllFlights
};
