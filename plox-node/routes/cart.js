const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all cart items');
});

router.get('/:id', (req, res) => {
    res.send(`Get cart item with the ID ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send('Add a new item to the cart');
});

router.put('/:id', (req, res) => {
    res.send(`Update cart item with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Delete cart item with ID ${req.params.id}`);
});

module.exports = router;