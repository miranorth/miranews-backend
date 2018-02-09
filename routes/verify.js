const express = require('express');
const router = express.Router();
const NumVerifyController = require('../controllers/NumVerivyController');
const nexmo = require('../controllers/nexmo');

router.get('/', NumVerifyController.getInfo);
router.post('/request', nexmo.reqVer);
router.post('/validate', nexmo.verCheck);


module.exports = router;
