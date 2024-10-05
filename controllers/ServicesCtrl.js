const Service = require('../models/Service.model');

// Create Service
exports.createService = async (req, res) => {
  try {
    const { title, description } = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];
    const service = new Service({ title, description, images });
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({ error: 'Error creating service' });
  }
};

// Get all services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching services' });
  }
};
