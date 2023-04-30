const mongoose = require('mongoose');

const organizationPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  maxUsers: {
    type: Number,
    required: true,
  },
  maxProjects: {
    type: Number,
    required: true,
  },
  maxClients: {
    type: Number,
    required: true,
  },
  price: {
    type: mongoose.Decimal128,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model('OrganizationPlan', organizationPlanSchema);
