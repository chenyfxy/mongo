var mongoose  = require('mongoose');
var DB_CONN_STR = 'mongodb://webapp:webapp-dev@127.0.0.1:27017/webapp';

mongoose.connect(DB_CONN_STR);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_CONN_STR);
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;