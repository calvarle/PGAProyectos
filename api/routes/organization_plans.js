const express = require('express');
const router = express.Router();
const organizationPlansController = require('../controllers/organizationPlansController');

// GET all organization plans
router.get('/', organizationPlansController.getAllOrganizationPlans);

// GET a specific organization plan by ID
router.get('/:id', organizationPlansController.getOrganizationPlanById);

// POST a new organization plan
router.post('/', organizationPlansController.createOrganizationPlan);

// PUT update an organization plan by ID
router.put('/:id', organizationPlansController.updateOrganizationPlanById);

// DELETE an organization plan by ID
router.delete('/:id', organizationPlansController.deleteOrganizationPlanById);

module.exports = router;
