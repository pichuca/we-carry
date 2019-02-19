const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('We carry API hook!');
});

// Dynamic PORT
const port = process.env.PORT || 3210;
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});