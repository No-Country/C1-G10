const {Schema, model} = require('mongoose');

//Se encargará de guardar el tipo de viaje de un tour, ex: Honeymoon, Adventure, Familiar, etc..

const Type = new Schema({
    name: String
})

module.exports = model('Type', Type);