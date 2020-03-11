const mongoose = require('mongoose');
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
    // const result = user.create({
    //     type: 'user',
    //     username: 'teste',
    //     password: 'teste',
    //     name: 'teste2',
    // });
        // console.log(result);
});
