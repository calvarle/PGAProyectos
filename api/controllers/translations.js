const Translation = require('../models/translations');

// Get all translations
exports.getTranslations = (req, res) => {
  Translation.find()
    .then(translations => res.json(translations))
    .catch(err => res.status(400).json('Error: ' + err));
};

// Add a new translation
exports.addTranslation = (req, res) => {
  const key = req.body.key;
  const values = req.body.values;

  const newTranslation = new Translation({
    key: key,
    values: values
  });

  newTranslation.save()
    .then(() => res.json('Translation added!'))
    .catch(err => res.status(400).json('Error: ' + err));
};

// Update a translation
exports.updateTranslation = (req, res) => {
  Translation.findById(req.params.id)
    .then(translation => {
      translation.key = req.body.key;
      translation.values = req.body.values;

      translation.save()
        .then(() => res.json('Translation updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

// Delete a translation
exports.deleteTranslation = (req, res) => {
  Translation.findByIdAndDelete(req.params.id)
    .then(() => res.json('Translation deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
};

