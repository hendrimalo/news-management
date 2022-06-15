const express = require('express');
const newsController = require('../controllers/news');

const router = express.Router();

// router news
router.get('/', newsController.actionViewAll);
router.get('/:id', newsController.actionViewById);
router.get('/tag/:name', newsController.actionViewByTags);
router.get('/topic/:name', newsController.actionViewByTopic);
router.post('/', newsController.actionCreate);
router.put('/:id', newsController.actionEdit);
router.delete('/:id', newsController.actionDelete);

module.exports = router;
