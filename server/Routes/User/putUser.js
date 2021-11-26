const express = require('express');
const route = express.Router()

const controller = require('../../Controllers/userController');

// API
route.put('/:id', controller.update);

module.exports = route