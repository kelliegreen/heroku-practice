process.env.NODE_ENV = 'development';


var port = 8000;


var app = require('./server/config/express')(),
    db = require('./server/config/mongoose')();


app.listen(port, function () {
    console.log('listening on ' + port);
});