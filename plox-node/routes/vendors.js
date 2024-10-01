const express = require('express');
const router = express.Router();

router.get('/:id', (res, req) => {
    res.send(`Get vendor  with ID ${req.params.id}`)
});

router.get('/:id', (req, res) => {
    res.send(`Get vendor with ID ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send('Create a new vendor');
});

router.put('/:id', (req, res) =>{
    res.send(`Update vendor with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Delete vendor with ID ${req.params.id}`);
});

module.exports = router;