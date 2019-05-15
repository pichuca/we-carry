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
            ordered: req.params.ordered,
            description: 'gorras de golf marca Taylormade.', // TODO: Get dynamic product description
            stock: true ? 'Cuenta con stock disponible.' : 'No hay stock en este momento.' // Get dynamic stock
            // TODO: add image, or whatever fields that want to be added to this route
        }
    }));

module.exports = router;