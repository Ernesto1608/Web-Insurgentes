'use strict';
module.exports = function (app) {
    var album = require('../controllers/AlbumController');
    app.route('/album')
    .get(album.ListarTodosLosAlbums)
    .post(album.crearAlbum);
    app.route('/album/:albumId')
    .put(album.actualizarAlbum)
    .delete(album.borrarAlbum);
};