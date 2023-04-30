const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');
const myMiddleware = (req, res, next) => {
    console.log('Middleware function called');
    next();
  };
  
  router.use(myMiddleware);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;



