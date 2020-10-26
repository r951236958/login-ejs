'use strict';

const express = require('express');

const dotenv = require('dotenv');
require('dotenv')
    .config();

const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(process.env.PORT || 3000, () => {
    //const server = app.listen(process.env.PORT || 3000, () => {
    //console.log(`App listening on port http://localhost:${server.address().port}`);
    console.log(`Server listening on port :${server.address().port} `);
});
