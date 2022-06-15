const express = require('express');
const tagsController = require('../controllers/tags');

const router = express.Router();

// router tags
router.get('/', tagsController.actionViewAll);
router.get('/:id', tagsController.actionViewById);
router.post('/', tagsController.actionCreate);
router.put('/:id', tagsController.actionEdit);
router.delete('/:id', tagsController.actionDelete);

module.exports = router;
