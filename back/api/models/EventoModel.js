'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EventoSchema = new Schema({
    fecha: {
        type: Date,
        required: 'Fecha del Evento'
    },
    lugar: {
        type: String,
        required: 'Lugar del Evento'
    },
    link: {
        type: String,
        required: 'Link boletos del Evento'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Eventos', EventoSchema);