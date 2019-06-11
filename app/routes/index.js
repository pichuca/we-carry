const express = require('express');
const router = express.Router();
// var request = require('request');
const soapRequest = require('../modules/soapRequest.js');
const fs = require('fs');
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
// TODO: should add welcome view if want to re add register option
router.get('/', (req, res) => res.render('login'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    let username = 'AgGalicia';
    let password = '123456';
    const url = 'http://190.221.30.210/intranet/Login.aspx';
   
    const xml = fs.readFileSync('xml/AutenticacionRequest.xml', 'utf-8');
    

    res.render('dashboard', {
        user: {
            name: req.user.name
        }
    });
});

router.get('/orders', ensureAuthenticated, (req, res) =>
    res.render('orders'));

router.get('/entries', ensureAuthenticated, (req, res) =>
    res.render('entries'));

router.get('/stats', ensureAuthenticated, (req, res) =>
    res.render('stats'));

module.exports = router;
