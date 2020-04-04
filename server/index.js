const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routeTask = require('./task/index')
const cors = require('cors');
const setupMongo = require('../database/script/setup');


app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:8080',
}));

setupMongo();

app.use('/api/task', routeTask);

app.listen(3000, () => {
    console.log('Using localhsot:3000')
});
