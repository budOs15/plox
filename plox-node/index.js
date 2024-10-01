const express = require('express');
const app = express();
const port = 8080;
const { Pool } = require('pg');
const { database } = require('pg/lib/defaults');
const pool = new Pool({
    user: 'postgres',
    host: 'postgres',
    database: 'plox',
    port: 3000,
});

app.get('/', (req, res) => {
    res.send("Hello!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});

pool.query('SELECT NOW()', (err, res) => {
    console.log(err.res);
    pool.end();
});