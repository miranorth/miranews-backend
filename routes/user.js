const express = require('express');
const router  = express.Router();
const User    = require('../controllers/userController')
const Verification = require('../controllers/nexmo');

router.get('/', User.getAllUser)
router.get('/:id', User.getSingleUser)
router.post('/', User.signUp)
router.put('/:id', User.editUser)
router.delete('/:id', User.deleteUser)

module.exports = router;
