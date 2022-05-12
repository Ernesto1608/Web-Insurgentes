'use strict';
var mongoose = require('mongoose'),
Album = mongoose.model('Albums');
exports.ListarTodosLosAlbums = function (req, res) {
Album.find({}, function (err, album) {
    if (err)
    res.send(err);
    res.json(album);
});
};
exports.crearAlbum = function (req, res) {
var newAlbum = new Album(req.body);
newAlbum.save(function (err, album) {
    if (err)
    res.send(err);
    res.json(album);
});
};
exports.actualizarAlbum = function (req, res) {
Album.findOneAndUpdate({ _id: req.params.albumId }, 
req.body, { new: true }, function (err, album) {
    if (err)
    res.send(err);
    res.json(album);
});
};
exports.borrarAlbum = function (req, res) {
Album.remove({ _id: req.params.albumId }, function (err, album) {
    if (err)
    res.send(err);
    res.json({ message: 'Album Borrado Exitosamente' });
});
};