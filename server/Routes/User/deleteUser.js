const express = require('express');
const route = express.Router()

const controller = require('../../Controllers/userController');

// API
route.delete('/:id', controller.delete);

module.exports = route