const repositoy = require('../../repository/task');

const getTasks = ( async () => {
    try {
        const result = await repositoy.getTasks();
        return result
    } catch(err) {
        console.log(err);
    }
});

const saveTask = ( async (payload) => {
    try {
        const result = await repositoy.saveTask(payload);
        return result
    } catch(err) {
        console.log(err);
    }
});

const softDelete = (async () => {
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