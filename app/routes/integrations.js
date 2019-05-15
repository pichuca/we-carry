const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const { meli } = require('../config/keys');


router.get('/meliredirect', ensureAuthenticated, (req, res) =>
    res.redirect('https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=' + meli.id));

// Meli page
router.get('/meli', ensureAuthenticated, (req, res) =>
    res.render('meliintegrations', {
        data: {
            code: req.query.code
        }
    }));

module.exports = router;