const mongoose = require('mongoose');

const timeZoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  abbreviation: {
    type: String,
    required: true,
    trim: true,
  },
  offset: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('TimeZone', timeZoneSchema);
