const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;

const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app = express();
const port = 8000;

app.use(bodyParser.json({extended: true}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    require('./routes')(app, database);

    app.listen(port, () => {
        console.log('Server started on ' + port + '...');
    });
})