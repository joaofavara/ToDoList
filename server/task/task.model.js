const repositoy = require('../repository/task');

const getTasksToDo = ( async () => {
    try {
        return await repositoy.getTasksToDo();
    } catch(err) {
        console.log(err);
    }
});

const getTasksDone = ( async () => {
    try {
        return await repositoy.getTasksDone();
    } catch(err) {
        console.log(err);
    }
});

const saveTask = ( async (payload) => {
    try {
        return await repositoy.saveTask(payload);
    } catch(err) {
        console.log(err);
    }
});

const softDelete = (async (id) => {
    try {
        return await repositoy.softDelete(id);
    } catch(err) {
        console.log(err);
    }
});

const updateToDone = (async (id) => {
    try {
        return await repositoy.updateToDone(id);
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