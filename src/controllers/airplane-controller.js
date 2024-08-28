const AirplaneService = require('../services/airplane-service');
const airplaneService = new AirplaneService();

const createAirplane = async (req, res) => {
    try {
        const airplane = await airplaneService.create(req.body);
        return res.status(201).json({
            data: airplane,
            success: true,
            message: 'Successfully created an airplane',
            err: {}
        });
    } catch (error) {
        console.error('Error in createAirplane:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to create an airplane',
            err: error.message
        });
    }
};

const deleteAirplane = async (req, res) => {
    try {
        const response = await airplaneService.delete(req.params.id);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'Airplane not found',
                err: {}
            });
        }
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted an airplane',
            err: {}
        });
    } catch (error) {
        console.error('Error in deleteAirplane:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to delete an airplane',
            err: error.message
        });
    }
};

const getAirplane = async (req, res) => {
    try {
        const response = await airplaneService.get(req.params.id);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'Airplane not found',
                err: {}
            });
        }
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched an airplane',
            err: {}
        });
    } catch (error) {
        console.error('Error in getAirplane:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch an airplane',
            err: error.message
        });
    }
};

const updateAirplane = async (req, res) => {
    try {
        const response = await airplaneService.update(req.params.id, req.body);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'Airplane not found',
                err: {}
            });
        }
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated an airplane',
            err: {}
        });
    } catch (error) {
        console.error('Error in updateAirplane:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to update an airplane',
            err: error.message
        });
    }
};

const getAllAirplanes = async (req, res) => {
    try {
        const response = await airplaneService.getAll();
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched all airplanes',
            err: {}
        });
    } catch (error) {
        console.error('Error in getAllAirplanes:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch all airplanes',
            err: error.message
        });
    }
};

module.exports = {
    createAirplane,
    deleteAirplane,
    getAirplane,
    updateAirplane,
    getAllAirplanes
};
