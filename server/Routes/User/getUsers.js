const express = require('express');
const route = express.Router()

const controller = require('../../Controllers/userController');

// API
route.get('/', controller.find);

module.exports = route