const debug = require('debug')('app:startup');
const config = require('config');
const express = require('express');
const app = express();

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// If not set will return 'development' by default.
console.log(`app: ${app.get('env')}`);

// Configuration
console.log('Application name: ' + config.get('name'))

// Environment
// use e.g :'export NODE_ENV=production' in teminal to set environment 
const env = app.get('env');
// Dynamic PORT
const port = process.env.PORT || 3210;

app.get('/', function(req, res) {
    res.send('We carry API hook!');
    // NOTE: use debuggers with ENV variable
    // e.g: export DEBUG=app:startup
    // set DEBUG to '' for avoid logging messages.
    debug('route "/" works!');
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});