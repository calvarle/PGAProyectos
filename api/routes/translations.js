const router = require('express').Router();
const translationsController = require('../controllers/translations');

router.get('/', translationsController.getTranslations);
router.post('/', translationsController.addTranslation);
router.put('/:id', translationsController.updateTranslation);
router.delete('/:id', translationsController.deleteTranslation);

module.exports = router;
