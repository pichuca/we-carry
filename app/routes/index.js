const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => 
    res.render('dashboard', {
        user: {
            name: req.user.name
        }
    }));

router.get('/orders', ensureAuthenticated, (req, res) =>
    res.render('orders'));

router.get('/entries', ensureAuthenticated, (req, res) =>
    res.render('entries'));

router.get('/stats', ensureAuthenticated, (req, res) =>
    res.render('stats'));

module.exports = router;
