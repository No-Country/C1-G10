const express = require('express');
const route = express.Router()

const controller = require('../../Controllers/userController');

// API
route.post('/', controller.create);

module.exports = route