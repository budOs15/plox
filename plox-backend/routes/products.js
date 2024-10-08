const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all products');
});

router.get('/', (req, res) => {
    res.send(`Get product with ID ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send('Create a new product');
});

router.delete('/:id', (req, res) => {
    res.send(`Delete product with ID ${req.params.id}`);
});

module.exports = router;