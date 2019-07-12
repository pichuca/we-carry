const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const moment = require('moment');

moment.locale('es');
const formattedTime = moment().format('MMMM Do YYYY, h:mm:ss a');
// TODO: get dynamic destination info
const productDestination = 'Universidad de San Andres, Buenos Aires';

// Create MAP link
const MAPS_API_URL = 'https://www.google.com/maps/search/?api=1&query=';
const regex = /[,\s]/g; // remove commans
const query = productDestination.replace(regex, '+'); // concatenate query words
const queryURL = MAPS_API_URL + query;


// Tracking route
router.get('/:id/:name', ensureAuthenticated, (req, res) =>
    res.render('tracking', {
        product: {
            id: req.params.id,
            name: req.params.name,
            time: formattedTime,
            destination: productDestination,
            linkURL: queryURL,
            status: 'en camino.'
        }
    }));

module.exports = router;
