const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const moment = require('moment');

// moment
moment().locale('es');
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// Product page
router.get('/:id/:name/:availability/:ordered', ensureAuthenticated, (req, res) => 
    res.render('product', {
        product: {
            id: req.params.id,
            name: req.params.name,
            availability: req.params.availability,
            ordered: req.params.ordered
            // TODO: add image, or whatever fields that want to be added to this route
        }
    }));

router.get('/tracking/:id', ensureAuthenticated, (req, res) => 
    res.render('tracking', {
        product: {
            id: req.params.id,
            date: currentDate
            // TODO: add more info: image, etc.
        }
    }));

module.exports = router;