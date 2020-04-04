const model = require('./task.model');

const getTasksToDo = ( async (req, res) => {
    try {
        const result = await model.getTasksToDo();
        return res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
});

const getTasksDone = ( async (req, res) => {
    try {
        const result = await model.getTasksDone();
        return res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
});

const saveTask = ( async (req, res) => {
    try {
        const { title, isDone, softDelete } = req.body;
        const result = await model.saveTask({title, isDone, softDelete});
        return res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
});

const softDelete = (async (req, res) => {
    try {
        const { id } = req.body;
        const result = await model.softDelete(id);
        return res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
});

const updateToDone = (async (req, res) => {
    try {
        const { id } = req.body;
        const result = await model.updateToDone(id);
        return res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
});

module.exports = {
    getTasksToDo,
    getTasksDone,
    saveTask,
    softDelete,
    updateToDone,
} 