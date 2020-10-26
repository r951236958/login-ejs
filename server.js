'use strict';

const express = require('express');

const dotenv = require('dotenv');
require('dotenv').config();

const app = require('./app');

const server = app.listen(process.env.PORT || 3000, () => {
  //console.log(`App listening on port http://localhost:${server.address().port}`);
  console.log(`App listening on port ${server.address().port}`);
});