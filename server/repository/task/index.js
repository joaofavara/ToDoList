const taskModel = require('../../../database/task/task.model');

const getTasks = ( async () => {
    return await taskModel.find({});
});

const saveTask = ( async (payload) => {
    return await taskModel.create({
        type: 'task',
        title: payload.title,
        isDone: payload.isDone,
        softDelete: payload.softDelete,
    });
});

const softDelete = (async () => {
    return await taskModel.findByIdAndUpdate({});
});

module.exports = {
    getTasks,
    saveTask,
    softDelete,
} 