const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
require('dotenv').config();

const router = express.Router();
const pool = new Pool();

router.post('/register', async (req, res) => {
    const {username, password } = req.body;
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user.id}, process.env.SECRET_KEY);
        res.json({token});
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;