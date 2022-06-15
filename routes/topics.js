const express = require('express');
const topicsController = require('../controllers/topics');

const router = express.Router();

// router topics
router.get('/', topicsController.actionViewAll);
router.get('/:id', topicsController.actionViewById);
router.post('/', topicsController.actionCreate);
router.put('/:id', topicsController.actionEdit);
router.delete('/:id', topicsController.actionDelete);

module.exports = router;
