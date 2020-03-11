const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routeTask = require('./domain/task/index')
const cors = require('cors');

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:8080',
}));

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

db.once('open', async () => { 
    console.log('mongodb connected');
});

app.use('/api/task', routeTask);

app.listen(3000, () => {
    console.log('Using localhsot:3000')
});
