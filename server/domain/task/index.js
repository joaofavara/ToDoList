const express = require('express');
const router = express.Router();
const controller = require('./task.controller');

router.post('/saveTask', controller.saveTask);
router.get('/toDo', controller.getTasksToDo);
router.get('/done', controller.getTasksDone);
router.post('/softDelete', controller.softDelete);
router.put('/updateToDone', controller.updateToDone);

module.exports = router;
