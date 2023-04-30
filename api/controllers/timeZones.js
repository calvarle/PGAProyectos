const TimeZone = require('../models/time_zones');

// Get all time zones
exports.getTimeZones = async (req, res) => {
  try {
    const timeZones = await TimeZone.find();
    res.json(timeZones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one time zone
exports.getTimeZone = async (req, res) => {
  try {
    const timeZone = await TimeZone.findById(req.params.id);
    if (!timeZone) {
      return res.status(404).json({ message: 'Time zone not found' });
    }
    res.json(timeZone);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create one time zone
exports.createTimeZone = async (req, res) => {
  const timeZone = new TimeZone({
    name: req.body.name,
    abbreviation: req.body.abbreviation,
    offset: req.body.offset,
  });
  try {
    const newTimeZone = await timeZone.save();
    res.status(201).json(newTimeZone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update one time zone
exports.updateTimeZone = async (req, res) => {
  try {
    const timeZone = await TimeZone.findById(req.params.id);
    if (!timeZone) {
      return res.status(404).json({ message: 'Time zone not found' });
    }
    timeZone.name = req.body.name;
    timeZone.abbreviation = req.body.abbreviation;
    timeZone.offset = req.body.offset;
    const updatedTimeZone = await timeZone.save();
    res.json(updatedTimeZone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete one time zone
exports.deleteTimeZone = async (req, res) => {
  try {
    const timeZone = await TimeZone.findById(req.params.id);
    if (!timeZone) {
      return res.status(404).json({ message: 'Time zone not found' });
    }
    await timeZone.remove();
    res.json({ message: 'Time zone deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
