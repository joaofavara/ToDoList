const repositoy = require('../../repository/task');

const getTasks = ( async (req, res) => {
    try {
        const result = await repositoy.getTasks();
        return res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
});

const saveTask = ( async (req, res) => {
    try {
        console.log(req.body);
        const { title, inDone, softDelete } = req.body;
        const result = await repositoy.saveTask({title, inDone, softDelete});
        console.log(result);
        return res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
});

const softDelete = (async (req, res) => {
    try {
        const result = await repositoy.findByIdAndUpdate();
        return result
    } catch(err) {
        console.log(err);
    }
});

module.exports = {
    getTasks,
    saveTask,
    softDelete,
} 