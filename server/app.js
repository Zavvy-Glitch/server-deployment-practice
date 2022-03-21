'use strict';

const express = require('express');
const app = express();

app.get('/hello', (req, res, next) => {
    res.status(200).send('HELLO!!!!!!!!!!!!!!!!!!!!!!!!')
});

module.exports = app;