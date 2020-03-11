const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    type: String,
    title: String,
    isDone: Boolean,
    softDelete: Boolean,
});

module.exports = Task;