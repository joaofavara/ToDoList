const repositoy = require('../../repository/task');

const getTasksToDo = ( async (req, res) => {
    try {
        const result = await repositoy.getTasksToDo();
        return res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
});

const getTasksDone = ( async (req, res) => {
    try {
        const result = await repositoy.getTasksDone();
        return res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
});

const saveTask = ( async (req, res) => {
    try {
        const { title, isDone, softDelete } = req.body;
        const result = await repositoy.saveTask({title, isDone, softDelete});
        console.log(result);
        return res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
});

const softDelete = (async (req, res) => {
    try {
        const { id } = req.body;
        const result = await repositoy.softDelete(id);
        return res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
});

const updateToDone = (async (req, res) => {
    try {
        const { id } = req.body;
        const result = await repositoy.updateToDone(id);
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