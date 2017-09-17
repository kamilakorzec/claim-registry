// mock of authentication service

module.exports = function(app) {
    app.post('/login', (req, res) => {
        const {login, password} = req.body;
        if(!(login && password)) {
            res.sendStatus(401);
            return
        }
        res.send('token' + new Date().getTime());
    });

    app.post('/logout', (req, res) => {
        res.sendStatus(204);
    })
};
