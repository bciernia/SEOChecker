const express = require('express');
const {promptRouter} = require('./routes/prompt.js');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/', promptRouter);

app.listen(5000, '127.0.0.1');