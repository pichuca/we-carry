const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Tracking route
router.get('/:id', ensureAuthenticated, (req, res) =>
    res.render('tracking', {
        product: {
            id: req.params.id
        }
    }));

module.exports = router;
