module.exports = function(app, db) {
    app.post('/claims', (req, res) => {
        db.collection('claims', (err, collection) => collection.insert(req.body, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(result.ops[0]);
            }
        }));
    });

    app.get('/claims', (req, res) => {
        db.collection('claims', (err, collection) => collection.find().toArray((err, results) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(results);
            }
        }));
    });

    app.put('/claims/:id', (req, res) => {
        const ObjectID = require('mongodb').ObjectID;
        console.log(req.params)
        const find = {'_id': new ObjectID(req.params.id)};
        db.collection('claims', (err, collection) => collection.update(find, req.body, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(req.body);
            }
        }));
    });
};
