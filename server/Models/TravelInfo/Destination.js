const { Schema, model } = require('mongoose');

//Se encargará de guardar los destinos de los tours, ex: Lima, París, Chichiriviche, etc..

const Destination = new Schema({
    name: []
})

module.exports = model('Destination', Destination);