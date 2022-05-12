'use strict';
module.exports = function (app) {
    var evento = require('../controllers/EventoController');
    app.route('/eventos')
    .get(evento.ListarTodosLosEventos)
    .post(evento.crearEvento);
    app.route('/eventos/:eventoId')
    .get(evento.leerEvento)
    .put(evento.actualizarEvento)
    .delete(evento.borrarEvento);
};