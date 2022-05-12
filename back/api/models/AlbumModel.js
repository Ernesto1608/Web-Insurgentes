'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AlbumSchema = new Schema({
    title: {
        type: String,
        required: 'Titulo del Album'
    },
    description: {
        type: String,
        required: 'Descripción del Album'
    },
    urls: {
        type: String,
        required: 'URL Foto del Album'
    },
    songs: {
        type: Array,
        required: 'Canciones del Album'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Albums', AlbumSchema);