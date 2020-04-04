const mongoose = require('mongoose');

const mongoSetup = (() => {
    const config = {
        "auth": { "authSource": "admin" },
        "user": "root",
        "pass": "example",
        "useNewUrlParser": true,
        "useUnifiedTopology": true,
    }
    mongoose.connect('mongodb://root:example@localhost/dev', config);
    const db = mongoose.connection;

    db.on('error', () => {
        console.error.bind(console, 'mongodb connection error');
    });
    
    db.once('open', () => { 
        console.log('mongodb connected');
        db.createCollection('tasks');
    });
})

module.exports = mongoSetup;
