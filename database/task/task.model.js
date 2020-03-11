const mongoose = require('mongoose');
const taskSchemas = require('./task.schema');

const userModel = mongoose.model('Tasks', taskSchemas);

module.exports = userModel;