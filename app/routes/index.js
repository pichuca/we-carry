const express = require('express');
const router = express.Router();
var request = require('request');
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    const url = 'http://190.221.30.210/intranet/ServiciosWeb/ConsultaStock.asmx?op=obtenerStock';
    const data = request(url, (err, res, body) => {
        console.log('error:', err); // Print the error if one occurred
        console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        return body;
    });
    res.render('dashboard', {
        user: {
            name: req.user.name
        },
        products: data
    });
});

router.get('/orders', ensureAuthenticated, (req, res) =>
    res.render('orders'));

router.get('/entries', ensureAuthenticated, (req, res) =>
    res.render('entries'));

router.get('/stats', ensureAuthenticated, (req, res) =>
    res.render('stats'));

module.exports = router;
