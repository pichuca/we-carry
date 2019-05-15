const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

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

module.exports = router;