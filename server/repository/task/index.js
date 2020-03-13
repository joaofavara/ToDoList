const taskModel = require('../../../database/task/task.model');

const getTasksToDo = ( async () => {
    return await taskModel.find({
        isDone: false,
        softDelete: false,
    });
});

const getTasksDone = ( async () => {
    return await taskModel.find({
        isDone: true,
        softDelete: false,
    });
});

const saveTask = ( async (payload) => {
    return await taskModel.create({
        type: 'task',
        title: payload.title,
        isDone: payload.isDone,
        softDelete: payload.softDelete,
    });
});

const softDelete = (async (id) => {
    return await taskModel.findByIdAndUpdate(
        { _id: id }, 
        { softDelete: true }
    );
});

const updateToDone = (async (id) => {
    return await taskModel.findByIdAndUpdate(
        { _id: id }, 
        { isDone: true }
    );
});

module.exports = {
    getTasksToDo,
    getTasksDone,
    saveTask,
    softDelete,
    updateToDone,
} 