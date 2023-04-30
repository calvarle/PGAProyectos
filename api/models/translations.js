const mongoose = require('mongoose');

const TranslationSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true
  },
  values: [{
    language: {
      type: String,
      required: true
    },
    translation: {
      type: String,
      required: true
    }
  }]
});

module.exports = mongoose.model('Translations', TranslationSchema);
