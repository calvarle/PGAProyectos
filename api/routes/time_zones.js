const express = require('express');
const router = express.Router();

const timeZoneController = require('../controllers/timeZones');

// GET all time zones
router.get('/', timeZoneController.getTimeZones);

// GET a single time zone
router.get('/:id', timeZoneController.getTimeZone);

// POST a new time zone
router.post('/', timeZoneController.createTimeZone);

// PUT update an existing time zone
router.put('/:id', timeZoneController.updateTimeZone);

// DELETE a time zone
router.delete('/:id', timeZoneController.deleteTimeZone);

module.exports = router;
