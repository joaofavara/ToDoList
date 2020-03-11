const express = require('express');
const router = express.Router();
const controller = require('./task.controller');

router.post('/saveTask', controller.saveTask);
router.get('/', controller.getTasks);

module.exports = router;
