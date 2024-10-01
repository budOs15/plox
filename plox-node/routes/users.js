const express = require('espress');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all users');
});

router.get('/id', (req, res) => {
    res.send(`Get user by the ID ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send('Create a new user');
});

router.put('/:id', (req, res) => {
    res.send(`Update user by the ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Delete user bt ID ${req.params.id}`);
});

module.exports = router;