const express = require('express');
const router = express.Router();
const NumVerifyController = require('../controllers/NumVerivyController');

router.get('/', NumVerifyController.getInfo);

module.exports = router;
