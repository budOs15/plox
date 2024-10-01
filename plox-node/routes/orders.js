const express = require('express');
const router = express.Router();

router.get('/', (res, req) => {
    res.send('Get all orders');
});

router.get('/:id', (res, req) => {
    res.send(`Get orders with the ID ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send(`Create a new order`);
});

router.put('/:id', (req, res) => {
    res.send(`Update order with the ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Delete order with ID ${req.params.id}`);
});

module.exports = router;