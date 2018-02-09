const express = require('express');
const router = express.Router();
const NewsController = require('../controllers/NewsController');

router.get('/', NewsController.getNews);
router.get('/search', NewsController.searchNews);

module.exports = router;
