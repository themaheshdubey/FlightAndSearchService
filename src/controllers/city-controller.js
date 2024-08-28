const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.create(req.body); 
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.error("Error in create controller:", error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to create a city',
            err: error.message
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await cityService.delete(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted the city',
            err: {}
        });
    } catch (error) {
        console.error("Error in destroy controller:", error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to delete the city',
            err: error.message
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await cityService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched the city',
            err: {}
        });
    } catch (error) {
        console.error("Error in get controller:", error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch the city',
            err: error.message
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await cityService.update(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated the city',
            err: {}
        });
    } catch (error) {
        console.error("Error in update controller:", error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to update the city',
            err: error.message
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await cityService.getAll(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        });
    } catch (error) {
        console.error("Error in getAll controller:", error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch all cities',
            err: error.message
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}
