const { Schema, model } = require('mongoose')

//Se encargará de guardar categorías de tours, ex: Expensive, Standard, Luxury, etc..

const Category = new Schema({
    name: String
})

module.exports = model('Category', Category)