'use strict';
var mongoose = require('mongoose'),
Evento = mongoose.model('Eventos');
exports.ListarTodosLosEventos = function (req, res) {
Evento.find({}, function (err, evento) {
    if (err)
    res.send(err);
    res.json(evento);
});
};
exports.crearEvento = function (req, res) {
var newEvento = new Evento(req.body);
newEvento.save(function (err, evento) {
    if (err)
    res.send(err);
    res.json(evento);
});
};
exports.leerEvento = function (req, res) {
Evento.findById(req.params.eventoId, function (err, evento) {
    if (err)
    res.send(err);
    res.json(evento);
});
};
exports.actualizarEvento = function (req, res) {
Evento.findOneAndUpdate({ _id: req.params.eventoId }, 
req.body, { new: true }, function (err, evento) {
    if (err)
    res.send(err);
    res.json(evento);
});
};
exports.borrarEvento = function (req, res) {
Evento.remove({ _id: req.params.eventoId }, function (err, evento) {
    if (err)
    res.send(err);
    res.json({ message: 'Evento Borrado Exitosamente' });
});
};