const OrganizationPlan = require('../models/organizationPlan');

// Get all organization plans
exports.getOrganizationPlans = async (req, res) => {
  try {
    const organizationPlans = await OrganizationPlan.find();
    res.json(organizationPlans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one organization plan
exports.getOrganizationPlan = async (req, res) => {
  res.json(res.organizationPlan);
};

// Create organization plan
exports.createOrganizationPlan = async (req, res) => {
  const organizationPlan = new OrganizationPlan({
    name: req.body.name,
    maxUsers: req.body.maxUsers,
    maxProjects: req.body.maxProjects,
    maxClients: req.body.maxClients,
    price: req.body.price,
    createdAt: new Date(),
    modifiedAt: new Date(),
    active: true,
  });

  try {
    const newOrganizationPlan = await organizationPlan.save();
    res.status(201).json(newOrganizationPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update organization plan
exports.updateOrganizationPlan = async (req, res) => {
  if (req.body.name !== null) {
    res.organizationPlan.name = req.body.name;
  }

  if (req.body.maxUsers !== null) {
    res.organizationPlan.maxUsers = req.body.maxUsers;
  }

  if (req.body.maxProjects !== null) {
    res.organizationPlan.maxProjects = req.body.maxProjects;
  }

  if (req.body.maxClients !== null) {
    res.organizationPlan.maxClients = req.body.maxClients;
  }

  if (req.body.price !== null) {
    res.organizationPlan.price = req.body.price;
  }

  res.organizationPlan.modifiedAt = new Date();
  try {
    const updatedOrganizationPlan = await res.organizationPlan.save();
    res.json(updatedOrganizationPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete organization plan
exports.deleteOrganizationPlan = async (req, res) => {
  try {
    await res.organizationPlan.remove();
    res.json({ message: 'Organization plan deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Middleware to get organization plan by ID
exports.getOrganizationPlanById = async (req, res, next) => {
  let organizationPlan;
  try {
    organizationPlan = await OrganizationPlan.findById(req.params.id);
    if (organizationPlan === null) {
      return res.status(404).json({ message: 'Cannot find organization plan' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.organizationPlan = organizationPlan;
  next();
};
