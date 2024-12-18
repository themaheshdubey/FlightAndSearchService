const CityService = require('../services/city-service');
const cityService = new CityService();

const createCity = async (req, res) => {
    try {
        const city = await cityService.create(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.error('Error in createCity:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to create a city',
            err: error.message
        });
    }
};

const deleteCity = async (req, res) => {
    try {
        const response = await cityService.delete(req.params.id);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'City not found',
                err: {}
            });
        }
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.error('Error in deleteCity:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to delete a city',
            err: error.message
        });
    }
};

const getCity = async (req, res) => {
    try {
        const response = await cityService.get(req.params.id);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'City not found',
                err: {}
            });
        }
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.error('Error in getCity:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch a city',
            err: error.message
        });
    }
};

const updateCity = async (req, res) => {
    try {
        const response = await cityService.update(req.params.id, req.body);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'City not found',
                err: {}
            });
        }
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated a city',
            err: {}
        });
    } catch (error) {
        console.error('Error in updateCity:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to update a city',
            err: error.message
        });
    }
};

const getAllCities = async (req, res) => {
    try {
        const response = await cityService.getAll();
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        });
    } catch (error) {
        console.error('Error in getAllCities:', error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch all cities',
            err: error.message
        });
    }
};

module.exports = {
    createCity,
    deleteCity,
    getCity,
    updateCity,
    getAllCities
};
